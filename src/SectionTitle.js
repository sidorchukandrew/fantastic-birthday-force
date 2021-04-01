export default function SectionTitle(props) {
    return (
        <div className="border-bottom p-vertical-md bold-6 font-md">
            {props.children}
        </div>
    );
}