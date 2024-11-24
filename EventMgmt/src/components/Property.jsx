export default function Property({ nameofproperty, Icon }) {

    const procss = {
        bordrderradius: "10px",
    }
    
    return (
    <div style={procss}>
        <div className="px-24 text-6xl text-[#b39592] py-8">
            <img src={Icon} width={400} height={250} alt="icon" />
        </div>
        <h3 className="text-2xl pb-2">{nameofproperty}</h3>
    </div>
    );
}