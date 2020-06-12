type Item={
    type?,
    content?,
    create?,
    expires?
};
class Storage{
    storage;
    constructor(storage){
        this.storage=storage;
    }
    /**
     *
     * @param key key
     * @param val val
     * @param expires 过期时间 单位 s
     */
    setItem(key, val, expires?) {
        const obj:Item = {};
        obj.type = typeof val;
        if (obj.type === 'object') {
            obj.content = JSON.stringify(val);
        } else {
            obj.content = val;
        }
        obj.create = new Date().getTime();
        if (expires) {
            obj.expires = expires * 1000;
        }
        this.storage.setItem(key, JSON.stringify(obj));
    }
    getItem(key) {
        let val = this.storage.getItem(key);
        if (!val) {
            return null
        }
        let obj;
        try {
            obj = JSON.parse(val);
        } catch (e) {
            obj = val;
        }
        let result = null;
        if (obj.type === 'object') {
            try {
                result = JSON.parse(obj.content);
            } catch (e) {
                result = obj.content;
            }
        } else {
            result = obj.content;
        }
        //是否过期
        if (obj.expires) {
            if (new Date().getTime() - obj.create < obj.expires) {
                return result;
            } else {
                this.storage.removeItem(key);
                return null;
            }
        } else {
            return result;
        }
    }

}
export default Storage;
export let session=new Storage(sessionStorage);
export let storage=new Storage(localStorage);
