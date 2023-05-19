export class AnimationController {
  constructor(
    mobileFrameControls,
    pcFrameControls,
    defaultMessageControls,
    loadingMobileControls,
    loadingPcControls,
    mobileIFrameControls,
    pcIFrameControls,
    animations
  ) {
    this.mobileFrameControls = mobileFrameControls;
    this.pcFrameControls = pcFrameControls;
    this.defaultMessageControls = defaultMessageControls;
    this.loadingMobileControls = loadingMobileControls;
    this.loadingPcControls = loadingPcControls;
    this.mobileIFrameControls = mobileIFrameControls;
    this.pcIFrameControls = pcIFrameControls;
    this.animationCounter = 0;
    this.animations = animations;
  }
  renderMobileFrame = async () => {
    this.animationCounter += 1;
    await this.mobileFrameControls.start(this.animations.popUp.animate);
    this.animationCounter -= 1;
  };
  unrenderMobileFrame = async () => {
    this.animationCounter += 1;
    await this.mobileFrameControls.start(this.animations.popUp.exit);
    this.animationCounter -= 1;
  };
  renderPcFrame = async () => {
    this.animationCounter += 1;
    await this.pcFrameControls.start(this.animations.popUp.animate);
    this.animationCounter -= 1;
  };
  unrenderPcFrame = async () => {
    this.animationCounter += 1;
    await this.pcFrameControls.start(this.animations.popUp.exit);
    this.animationCounter -= 1;
  };
  renderDefault = async () => {
    this.animationCounter += 1;
    await this.defaultMessageControls.start(this.animations.fade.animate);
    this.animationCounter -= 1;
  };
  unrenderDefault = async () => {
    this.animationCounter += 1;
    await this.defaultMessageControls.start(this.animations.fade.exit);
    this.animationCounter -= 1;
  };
  renderMobileLoading = async () => {
    this.animationCounter += 1;
    await this.loadingMobileControls.start(this.animations.fade.animate);
    this.animationCounter--;
  };
  unrenderMobileLoading = async () => {
    this.animationCounter += 1;
    await this.loadingMobileControls.start(this.animations.fade.exit);
    this.animationCounter -= 1;
  };
  renderPcLoading = async () => {
    this.animationCounter += 1;
    await this.loadingPcControls.start(this.animations.fade.animate);
    this.animationCounter -= 1;
  };
  unrenderPcLoading = async () => {
    this.animationCounter += 1;
    await this.loadingPcControls.start(this.animations.fade.exit);
    this.animationCounter -= 1;
  };
  renderMobileIFrame = async () => {
    this.animationCounter += 1;
    await this.mobileIFrameControls.start(this.animations.fade.animate);
    this.animationCounter -= 1;
  };
  unrenderMobileIFrame = async () => {
    this.animationCounter += 1;
    await this.mobileIFrameControls.start(this.animations.fade.exit);
    this.animationCounter -= 1;
  };
  renderPcIFrame = async () => {
    this.animationCounter += 1;
    await this.pcIFrameControls.start(this.animations.fade.animate);
    this.animationCounter -= 1;
  };
  unrenderPcIFrame = async () => {
    this.animationCounter += 1;
    await this.pcIFrameControls.start(this.animations.fade.exit);
    this.animationCounter -= 1;
  };
  isAnimating = () => {
    return this.animationCounter > 0;
  };
}
