export default function SectionTitle(props) {
    return (
        <div className="border-bottom p-vertical-md m-bottom-lg bold-6 font-md">
            {props.children}
        </div>
    );
}