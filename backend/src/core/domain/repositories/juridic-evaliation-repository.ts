import { JuridicEvaluation } from '../class/juridic-evaluation';

export abstract class JuridicEvaluationRepository {
  abstract create(data: JuridicEvaluation): Promise<JuridicEvaluation>;
}
