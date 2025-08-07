import SimpleSignal from "simplesignal";
export declare type TickCallback = (currentTimeSeconds: number, tickDeltaTimeSeconds: number, currentTick: number) => void;
export default class FrameTicker {
    private _isRunning;
    private _timeScale;
    private _currentTick;
    private _currentTime;
    private _tickDeltaTime;
    private _minFPS;
    private _maxFPS;
    private _lastTimeUpdated;
    private _minInterval;
    private _maxInterval;
    private _now;
    private _frameDeltaTime;
    private _interval;
    private _onResume;
    private _onPause;
    private _onTick;
    private _onTickOncePerFrame;
    private _animationFrameHandle;
    /**
     * Creates a new FrameTicker instance.
     *
     * @param paused Starts in paused state if true. Default is false, which means it starts looping right
     *               away.
     *
     * @param minFPS Minimum amount of ticks to dispatch per second. This can cause frames to dispatch more
     *               than one onTick event. Default is NaN, which means there's no minimum (synchronizes
     *               with ENTER_FRAME).
     *
     * @param maxFPS Maximum amount of ticks to dispatch per second. This can cause frames to skip dispatching
     *               onTick events. Default is NaN, which means there's no maximum (synchronizes to
     *               ENTER_FRAME).
     */
    constructor(maxFPS?: number, minFPS?: number, paused?: boolean);
    updateOnce(callback: TickCallback): void;
    /**
     * Resumes running this instance, if it's in a paused state.
     *
     * <p>Calling this method when this instance is already running has no effect.</p>
     *
     * @see #isRunning
     */
    resume(): void;
    /**
     * Pauses this instance, if it's in a running state. All time- and tick-related property values are also
     * paused.
     *
     * <p>Calling this method when this instance is already paused has no effect.</p>
     *
     * @see #isRunning
     */
    pause(): void;
    /**
     * Prepares this instance for disposal, by pausing it and removing all signal callbacks.
     *
     * <p>Calling this method is not strictly necessary, but a good practice unless you're pausing it and
     * clearing all signals manually.</p>
     */
    dispose(): void;
    /**
     * The index of the tick (an "internal frame") executed last.
     */
    readonly currentTick: number;
    /**
     * The current internal time of the looper, in seconds. This is aligned to the last tick executed.
     */
    readonly currentTimeSeconds: number;
    /**
     * How much time has been spent between the last and the previous tick, in seconds.
     */
    readonly tickDeltaTimeSeconds: number;
    /**
     * The time scale for the internal loop time. Changing this has an impact on the time used by the looper,
     * and can have the effect of make objects that depend on it slower or faster.
     *
     * <p>The actual number of signal callbacks dispatched per second do not change.</p>
     */
    /**
     * The time scale for the internal loop time. Changing this has an impact on the time used by the looper,
     * and can have the effect of make objects that depend on it slower or faster.
     *
     * <p>The actual number of signal callbacks dispatched per second do not change.</p>
     */
    timeScale: number;
    /**
     * A signal that sends callbacks for when the looper resumes running. Sends no parameters.
     *
     * <p>Usage:</p>
     *
     * <pre>
     * private function myonResume():void {
     *     trace("Looper has resumed");
     * }
     *
     * myFrameTicker.onResume.add(myonResume);
     * </pre>
     */
    readonly onResume: SimpleSignal<() => void>;
    /**
     * A signal that sends callbacks for when the looper pauses execution. Sends no parameters.
     *
     * <p>Usage:</p>
     *
     * <pre>
     * private function myonPause():void {
     *     trace("Looper has paused");
     * }
     *
     * myFrameTicker.onPause.add(myonPause);
     * </pre>
     */
    readonly onPause: SimpleSignal<() => void>;
    /**
     * A signal that sends callbacks for when the looper instance loops (that is, it "ticks"). It sends the
     * current time (absolute and delta, as seconds) and current tick (as an int) as parameters.
     *
     * <p>Usage:</p>
     *
     * <pre>
     * private function myonTick(currentTimeSeconds:Number, tickDeltaTimeSeconds:Number, currentTick:int):void {
     *     trace("A loop happened.");
     *     trace("Time since it started executing:" + currentTimeSeconds + " seconds");
     *     trace("           Time since last tick:" + tickDeltaTimeSeconds + " seconds");
     *     trace("        Tick/frame count so far:" + currentTick);
     * }
     *
     * myFrameTicker.onTick.add(myonTick);
     * </pre>
     */
    readonly onTick: SimpleSignal<TickCallback>;
    /**
     * A signal that sends callbacks for when the looper instance loops (that is, it "ticks") only once per
     * frame (basically ignoring the <code>minFPS</code> parameter). It sends the current time (absolute and
     * delta, as seconds) and current tick (as an int) as parameters.
     *
     * <p>This is useful when using <code>minFPS</code> because you can use the <code>onTick</code> callback
     * to do any state changes your game needs, but then only perform visual updates after a
     * <code>onTickOncePerFrame()</code> call. If you need to enforce a minimum number of frames per
     * second but did all visual updates on <code>onTick()</code>, you could potentially be repeating useless
     * visual updates.
     *
     * <p>Usage:</p>
     *
     * <pre>
     * private function myonTickOncePerFrame(currentTimeSeconds:Number, tickDeltaTimeSeconds:Number, currentTick:int):void {
     *     trace("At least one loop happened in this frame.");
     *     trace("Time since it started executing:" + currentTimeSeconds + " seconds");
     *     trace("           Time since last tick:" + tickDeltaTimeSeconds + " seconds");
     *     trace("        Tick/frame count so far:" + currentTick);
     * }
     *
     * myFrameTicker.onTickOncePerFrame.add(myonTickOncePerFrame);
     * </pre>
     */
    readonly onTickOncePerFrame: SimpleSignal<TickCallback>;
    /**
     * Returns <code>true</code> if the FrameTicker instance is running, <code>false</code> if it is paused.
     *
     * @see #pause()
     * @see #resume()
     */
    readonly isRunning: boolean;
    private animateOnce();
    private onFrame();
    private update(timePassedMS, newVisualFrame?);
    private getTimer();
}
