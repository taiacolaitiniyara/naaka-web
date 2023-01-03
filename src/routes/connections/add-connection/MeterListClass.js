export default class MeterListClass {
  constructor(
    ConnPositionId,
    ConnPhaseId,
    ConnPwrSourceId,
    MtrId,
    MtrPhaseId,
    MtrTypeId,
    MtrRatio,
    CtRatio
  ) {
    this.ConnPositionId = ConnPositionId;
    this.ConnPhaseId = ConnPhaseId;
    this.ConnPwrSourceId = ConnPwrSourceId;
    this.MtrId = MtrId;
    this.MtrPhaseId = MtrPhaseId;
    this.MtrTypeId = MtrTypeId;
    this.MtrRatio = MtrRatio;
    this.CtRatio = CtRatio;
  }
}
