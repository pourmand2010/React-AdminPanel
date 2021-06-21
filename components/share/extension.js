
function IsNull(item) {
    return (typeof (item) == "undefined" || item == null || item == {});
}
function IsNotNull(item) {
    return !IsNull(item);
}
