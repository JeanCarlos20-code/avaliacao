import { DefaultInterface } from './default-interface';
import { PhysicalPersonInterface } from './physical-person-interface';
import { ScoreInterface } from './score-interface';

export interface JuridicEvaluationInterface
  extends ScoreInterface,
    DefaultInterface {
  valuer: JuridicEvaluationInterface;
  evaluated: PhysicalPersonInterface;
}
