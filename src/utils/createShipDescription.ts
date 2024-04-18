import type { Ship } from 'types/ship';

export function createShipDescription(ship: Ship) {
  let description = '';

  description += `${ship.name} is a ${ship.type} type ship.`;
  description += ship.active ? ' It is currently active.' : ' It is currently inactive.';
  description +=
    ship.launches.length > 0 ? ` Took part in ${ship.launches.length} launches.` : '';
  description += ` Located in ${ship.home_port}.`;
  description += ship.year_built ? ` Was built in ${ship.year_built} y.` : '';

  return description;
}
