interface DefinitionBoxProps {
  title: string;
  description: string;
  entityType?: string;
  aliases?: string[];
}

export default function DefinitionBox({ title, description, entityType, aliases }: DefinitionBoxProps) {
  return (
    <div className="definition-box" role="note" aria-label="Kort forklart">
      <div className="definition-box-header">
        <span className="definition-box-label">Kort forklart</span>
        {entityType && <span className="definition-entity-type">{entityType}</span>}
      </div>
      <p className="definition-box-text">{description}</p>
      {aliases && aliases.length > 0 && (
        <div className="definition-aliases">
          <span className="definition-aliases-label">Også kjent som:</span>
          {aliases.map((alias) => (
            <span key={alias} className="definition-alias">{alias}</span>
          ))}
        </div>
      )}
    </div>
  );
}
