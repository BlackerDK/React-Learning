export const formatters =(number)=>{
    return new Intl.NumberFormat("vi-VN",{
        style:"currency",
        currency:"VND"
    }

).format(number);
}