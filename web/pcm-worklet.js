class PCMWorklet extends AudioWorkletProcessor {
  constructor() {
    super();
    this.outRate = 24000;
    this.out = [];
    this.acc = 0;
  }
  process(inputs) {
    const input = inputs[0];
    if (!input || !input[0]) return true;
    const ch = input[0];
    const step = sampleRate / this.outRate;
    for (let i = 0; i < ch.length; i++) {
      this.acc += 1;
      if (this.acc >= step) {
        this.acc -= step;
        const s = Math.max(-1, Math.min(1, ch[i]));
        this.out.push(s < 0 ? s * 0x8000 : s * 0x7fff);
        if (this.out.length >= 2400) {
          const arr = new Int16Array(this.out);
          this.port.postMessage(arr.buffer, [arr.buffer]);
          this.out = [];
        }
      }
    }
    return true;
  }
}
registerProcessor("pcm-worklet", PCMWorklet);
