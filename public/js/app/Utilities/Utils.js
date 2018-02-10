isStringEmpty = function (str) {
    return !str || !str.trim();
};

isRecentDay = function (dateTs) {
    var today = new Date();
    var date = new Date(dateTs);
    var d1 = today.getDay();
    var d2 = date.getDay();
    if (today.getYear() == date.getYear() &&
        today.getMonth() == date.getMonth() &&
        today.getDate() - date.getDate() <= 1) {
        return true;
    }
    return false;
}

randomString = function (length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

arrayContainsObjectWithId = function (arr, objectId) {
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i];
        if (obj._id == objectId) {
            return true;
        }
    }
    return false;
}

getIdsStringFromObjectsArray = function (arr, joinBy) {
    var idsArr = arr.map(function(obj) {return obj._id;});
    var idsString = idsArr.join(joinBy);
    return idsString;
}

var closePopups = function (tagName) {
    $(document).mouseup(function (e)
    {
        var container = $(tagName);
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.hide();
            $(document).unbind('mouseup');
        }
    });
}

function isUrl(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
}