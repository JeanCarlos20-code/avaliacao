import { JuridicEvaluationInterface } from '../interface/juridic-evaluation-interface';
import { PhysicalPersonInterface } from '../interface/physical-person-interface';
import { Default } from './default';

export class JuridicEvaluation
  extends Default
  implements JuridicEvaluationInterface
{
  private constructor(
    private props: JuridicEvaluationInterface,
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

  static create(props: JuridicEvaluationInterface, id?: number) {
    return new JuridicEvaluation(props, id);
  }

  public get valuer(): JuridicEvaluationInterface {
    return this.props.valuer;
  }

  public set valuer(valuer: JuridicEvaluationInterface) {
    this.props.valuer = valuer;
  }

  public get evaluated(): PhysicalPersonInterface {
    return this.props.evaluated;
  }

  public set evaluated(evaluated: PhysicalPersonInterface) {
    this.props.evaluated = evaluated;
  }

  public get punctuality(): number {
    return this.props.punctuality;
  }

  public set punctuality(punctuality: number) {
    this.props.punctuality = punctuality;
  }

  public get performance(): number {
    return this.props.performance;
  }

  public set performance(performance: number) {
    this.props.performance = performance;
  }

  public get teamwork(): number {
    return this.props.teamwork;
  }

  public set teamwork(teamwork: number) {
    this.props.teamwork = teamwork;
  }

  public get avarageScore(): number {
    return this.props.avarageScore;
  }

  public set avarageScore(avarageScore: number) {
    this.props.avarageScore = avarageScore;
  }
}
