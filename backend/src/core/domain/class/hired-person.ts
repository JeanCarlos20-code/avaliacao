import { HiredPersonInterface } from '../interface/hired-person-interface';
import { JuridicPersonInterface } from '../interface/juridic-person-interface';
import { PhysicalPersonInterface } from '../interface/physical-person-interface';

export class HiredPerson implements HiredPersonInterface {
  private constructor(
    private props: HiredPersonInterface,
    public id?: number,
  ) {
    if (!props) {
      // @ts-expect-error used for ORM
      this.props = {};
      this.id = id;
      return;
    }
    this.id = id;
    this.props = props;
  }

  static create(props: HiredPersonInterface, id?: number) {
    return new HiredPerson(props, id);
  }

  public set physicalPersonId(physicalPersonId: number) {
    this.props.physicalPersonId = physicalPersonId;
  }

  public get physicalPersonId(): number {
    return this.props.physicalPersonId;
  }

  public set physicalPerson(physicalPerson: PhysicalPersonInterface) {
    this.props.physicalPerson = physicalPerson;
  }

  public get physicalPerson(): PhysicalPersonInterface {
    return this.props.physicalPerson;
  }

  public set juridicPersonId(juridicPersonId: number) {
    this.props.juridicPersonId = juridicPersonId;
  }

  public get juridicPersonId(): number {
    return this.props.juridicPersonId;
  }

  public set juridicPerson(juridicPerson: JuridicPersonInterface) {
    this.props.juridicPerson = juridicPerson;
  }

  public get juridicPerson(): JuridicPersonInterface {
    return this.props.juridicPerson;
  }
}
