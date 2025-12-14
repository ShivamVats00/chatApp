interface PlaceHolder {
    placeholder : string,
    size : "big" | "small",
    onChange? : ()=> void
}
export default function TextInput({placeholder, size, onChange}:PlaceHolder){
    return <input onChange={onChange} placeholder={placeholder} style={{
        padding :size === "big"? 20 :  10,
        margin : size === "big"? 20 : 10,
        borderColor : "black",
        borderWidth : 1
    }} />
}