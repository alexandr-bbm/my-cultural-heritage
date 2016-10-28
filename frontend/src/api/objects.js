export default class ObjectsApi {
    static getById(id) {
        return new Promise((resolve) => {
            const url = `http://heritage.pythonanywhere.com/objects/${id}/?format=json`;
            $.ajax({
                url: url,
                type: 'get',
                success: resolve
            })
        })
    }
}