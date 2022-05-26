import useParts from '../../Hooks/useParts';
import Part from './Part';

const Parts = () => {

    const [parts] = useParts();

    return (
        <div id="parts">
            <div className="m-10">
                <h2 className="text-center text-3xl py-10 text-accent">BICYCLE PARTS :{parts.length}</h2>
                <div className="divider mx-40">-</div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6">
                    {parts.slice(0, 6).map((part) => (
                        <Part key={part._id} part={part}></Part>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Parts;