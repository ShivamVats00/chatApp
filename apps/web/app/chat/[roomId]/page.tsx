import TextInput from "@repo/ui/text-input";

export default function RoomId(){
    return <div style={{
        width : "100vw",
        height : "100vh",
        display : "flex",
        justifyContent : "space-between",
        flexDirection : "column"
    }}>
        <div>
            Chat
        </div>
        <div>
            <TextInput placeholder="Chat here" size="big"></TextInput>
        </div>
        
    </div>
}