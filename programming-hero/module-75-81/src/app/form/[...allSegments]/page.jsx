

const CatchAllSegments = async({params}) => {
    const {allSegments} = await params;

    console.log(allSegments);

    return (
        <div>
            <h2 className="text3xl">Catch All Segments. Total : {allSegments.length} </h2>
        </div>
    );
};

export default CatchAllSegments;