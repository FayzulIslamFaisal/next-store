import LinkItem from "./LinkItem";

function QuickLinks({ title, option = [], children }) {
    return (
        <>
            <h5>{title}</h5>
            {children ? (
                children
            ) : (
                <ul>
                    {option.map((item) => (
                        <LinkItem
                            key={item.title}
                            title={item.title}
                            path={item.path}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}

export default QuickLinks;
