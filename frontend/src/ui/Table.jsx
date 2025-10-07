function Table({ children }) {
    return (
        <div className="bg-secondary-950 overflow-x-auto">
            <table>{children}</table>
        </div>
    );
}
export default Table;

function TableHeader({ children }) {
    return (
        <thead>
            <tr className="!bg-black/80 text-secondary-400 !rounded-2xl overflow-hidden text-sm">{children}</tr>
        </thead>
    );
}

function TableBody({ children }) {
    return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
    return <tr className="text-secondary-0 text-sm border-b hover:!bg-black border-b-secondary-100/30">{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
