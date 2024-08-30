import { JuridicPersonInterface } from './juridic-person-interface';
import { PhysicalPersonInterface } from './physical-person-interface';

export interface HiredPersonInterface {
  physicalPersonId: number;
  juridicPersonId: number;
  physicalPerson: PhysicalPersonInterface;
  juridicPerson: JuridicPersonInterface;
}
