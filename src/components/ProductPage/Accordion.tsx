export const Accordion = () => {
  return (
    <div className="w-3/4 mx-auto">
      <hr />
      <div className="collapse collapse-arrow">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-sm font-medium">Descripción</div>
        <div className="collapse-content">
          <p className="text-xs">
            Blusa en tejido vaporoso de mezcla de lino y viscosa con escote
            profundo en V. Modelo con botonadura frontal y mangas globo tres
            cuartos de corte raglán con elástico ceñido en los puños.
          </p>
        </div>
      </div>
      <hr />
      <div className="collapse collapse-arrow ">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-sm font-medium">Materiales</div>
        <div className="collapse-content">
          <p className="text-xs">
            Blusa en tejido vaporoso de mezcla de lino y viscosa con escote
            profundo en V. Modelo con botonadura frontal y mangas globo tres
            cuartos de corte raglán con elástico ceñido en los puños.
          </p>
        </div>
      </div>
      <hr />

      <div className="collapse collapse-arrow ">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-sm font-medium">
          Guía de cuidados
        </div>
        <div className="collapse-content">
          <p className="text-xs">
            Blusa en tejido vaporoso de mezcla de lino y viscosa con escote
            profundo en V. Modelo con botonadura frontal y mangas globo tres
            cuartos de corte raglán con elástico ceñido en los puños.
          </p>
        </div>
      </div>
    </div>
  );
};
