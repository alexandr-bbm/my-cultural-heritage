export default class RatingApi {
    static vote(id, score) {
        return new Promise((resolve) => {
            const url = 'http://heritage.pythonanywhere.com/rating/';
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    score,
                    object: id
                },
                success: function (data) {
                    resolve(data);
                }
            })
        })
    }
    static getById(id) {
        return new Promise((resolve) => {
            const url = `http://heritage.pythonanywhere.com/rating/${id}`;
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    object: id
                },
                success: function (data) {
                    resolve(data);
                }
            })
        })
    }
}
