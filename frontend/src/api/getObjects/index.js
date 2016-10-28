import MOCK_OBJECTS from 'api/mock';

export default function getObjects() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'http://heritage.pythonanywhere.com/objects/?format=json',
            type: 'GET',
            success: function (data) {
                resolve(data);
            },
            error: function () {
                resolve(MOCK_OBJECTS)
            },
        })
    })
}