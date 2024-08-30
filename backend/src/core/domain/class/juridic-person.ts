import { JuridicPersonInterface } from '../interface/juridic-person-interface';
import { Default } from './default';

export class JuridicPerson extends Default implements JuridicPersonInterface {
  private constructor(
    private props: JuridicPersonInterface,
    public id?: number,
  ) {
    super(props);

    if (!props) {
      // @ts-expect-error used for ORM
      this.props = {};
      this.id = id;
      return;
    }

    this.props.id = id;
    this.props = props;
  }

  static create(props: JuridicPersonInterface, id?: number) {
    return new JuridicPerson(props, id);
  }

  public set cnpj(cnpj: string) {
    this.props.cnpj = cnpj;
  }

  public get cnpj(): string {
    return this.props.cnpj;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public set bornDate(bornDate: Date) {
    this.props.bornDate = bornDate;
  }

  public get bornDate(): Date {
    return this.props.bornDate;
  }
}
