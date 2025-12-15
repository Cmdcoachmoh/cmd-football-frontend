interface Props {
  search: string;
  setSearch: (v: string) => void;
}

export default function JugglingFilters({ search, setSearch }: Props) {
  return (
    <div className="juggling-filters">
      <input
        type="text"
        placeholder="Search juggling levels..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}
