export default class ObjectsApi {
    static getById(id) {
        return new Promise((resolve) => {
            const url = `http://heritage.pythonanywhere.com/objects/${id}/`;
            $.ajax({
                url: url,
                type: 'get',
                data: {
                    format: 'json',
                    timestamp: (new Date()).getTime(),
                },
                success: resolve
            })
        })
    }
}