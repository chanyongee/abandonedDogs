function Card({animal}) {
    const {popfile, kindCd, sexCd, specialMark, happenPlace, careTel, age, careNm} = animal;
    return (
        <div className="col mb-5">
        <div className="card h-100">
            <div style={{'display': 'flex', 'justifyContent':'center', 'height': '180px'}}>
                <img className="card-img-top" src={popfile} style={{'maxHeight': '180px'}} alt="..."/>
            </div>
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{kindCd} ({sexCd === 'M'? '남': '여'})</h5>
                    발견장소: {happenPlace}<br></br>
                    나이: {age} <br></br>
                    특징: {specialMark}<br></br>
                    <strong>문의: {careNm}<br></br>{careTel}</strong>
                </div>
            </div>
            {/* <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
            </div> */}
        </div>
    </div>
    )
}

export default Card;