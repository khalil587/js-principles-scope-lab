var customerName = "bob";

function myFunction() {
    return customerName;
}
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer(){
    bestCustomer = "not bob";
    return bestCustomer;
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}
const leastFavoriteCustomer = "Susan";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = leastFavoriteCustomer.toUpperCase();

}