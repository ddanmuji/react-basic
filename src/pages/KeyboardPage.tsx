import { Menu } from '../components';
import { AppLayout } from '../layouts';
import './style.css';

const KeyboardPage = () => {
  return (
    <AppLayout>
      <Menu />

      <div className="input-group" id="input-group">
        <input id="input" className="input" type="text" autoComplete="off" />
        <div className="error-message">한글 입력 불가</div>
      </div>
      <div className="keyboard" id="keyboard">
        <div className="row">
          <div className="key" data-code="Backquote" data-val="`">
            <span className="two-value">~</span>
            <span className="two-value">`</span>
          </div>
          <div className="key" data-code="Digit1" data-val="1">
            <span className="two-value">!</span>
            <span className="two-value">1</span>
          </div>
          <div className="key" data-code="Digit2" data-val="2">
            <span className="two-value">@</span>
            <span className="two-value">2</span>
          </div>
          <div className="key" data-code="Digit3" data-val="3">
            <span className="two-value">#</span>
            <span className="two-value">3</span>
          </div>
          <div className="key" data-code="Digit4" data-val="4">
            <span className="two-value">$</span>
            <span className="two-value">4</span>
          </div>
          <div className="key" data-code="Digit5" data-val="5">
            <span className="two-value">%</span>
            <span className="two-value">5</span>
          </div>
          <div className="key" data-code="Digit6" data-val="6">
            <span className="two-value">^</span>
            <span className="two-value">6</span>
          </div>
          <div className="key" data-code="Digit7" data-val="7">
            <span className="two-value">&</span>
            <span className="two-value">7</span>
          </div>
          <div className="key" data-code="Digit8" data-val="8">
            <span className="two-value">*</span>
            <span className="two-value">8</span>
          </div>
          <div className="key" data-code="Digit9" data-val="9">
            <span className="two-value">(</span>
            <span className="two-value">9</span>
          </div>
          <div className="key" data-code="Digit0" data-val="0">
            <span className="two-value">)</span>
            <span className="two-value">0</span>
          </div>
          <div className="key" data-code="Minus" data-val="-">
            <span className="two-value">_</span>
            <span className="two-value">-</span>
          </div>
          <div className="key" data-code="Equal" data-val="=">
            <span className="two-value">+</span>
            <span className="two-value">=</span>
          </div>
          <div className="key back-space-key" data-code="Backspace" data-val="Backspace">
            Backspace
          </div>
        </div>
        <div className="row">
          <div className="key tab-key">Tab</div>
          <div className="key" data-code="KeyQ" data-val="q">
            Q
          </div>
          <div className="key" data-code="KeyW" data-val="w">
            W
          </div>
          <div className="key" data-code="KeyE" data-val="e">
            E
          </div>
          <div className="key" data-code="KeyR" data-val="r">
            R
          </div>
          <div className="key" data-code="KeyT" data-val="t">
            T
          </div>
          <div className="key" data-code="KeyY" data-val="y">
            Y
          </div>
          <div className="key" data-code="KeyU" data-val="u">
            U
          </div>
          <div className="key" data-code="KeyI" data-val="i">
            I
          </div>
          <div className="key" data-code="KeyO" data-val="o">
            O
          </div>
          <div className="key" data-code="KeyP" data-val="p">
            P
          </div>
          <div className="key" data-code="BracketLeft" data-val="[">
            <span className="two-value">{'{'}</span>
            <span className="two-value">[</span>
          </div>
          <div className="key" data-code="BracketRight" data-val="]">
            <span className="two-value">{'}'}</span>
            <span className="two-value">]</span>
          </div>
          <div className="key back-slash-key" data-code="Backslash" data-val="\">
            <span className="two-value">|</span>
            <span className="two-value">\</span>
          </div>
        </div>
        <div className="row">
          <div className="key caps-lock-key">CapsLock</div>
          <div className="key" data-code="KeyA" data-val="a">
            A
          </div>
          <div className="key" data-code="KeyS" data-val="s">
            S
          </div>
          <div className="key" data-code="KeyD" data-val="d">
            D
          </div>
          <div className="key" data-code="KeyF" data-val="f">
            F
          </div>
          <div className="key" data-code="KeyG" data-val="g">
            G
          </div>
          <div className="key" data-code="KeyH" data-val="h">
            H
          </div>
          <div className="key" data-code="KeyJ" data-val="j">
            J
          </div>
          <div className="key" data-code="KeyK" data-val="k">
            K
          </div>
          <div className="key" data-code="KeyL" data-val="l">
            L
          </div>
          <div className="key" data-code="Semicolon" data-val=";">
            <span className="two-value">:</span>
            <span className="two-value">;</span>
          </div>
          <div className="key" data-code="Quote" data-val="'">
            <span className="two-value">{'"'}</span>
            <span className="two-value">{"'"}</span>
          </div>
          <div className="key enter-key" data-code="Enter">
            Enter
          </div>
        </div>
        <div className="row">
          <div className="key left-shift-key" data-code="ShiftLeft">
            Shift
          </div>
          <div className="key" data-code="KeyZ" data-val="z">
            Z
          </div>
          <div className="key" data-code="KeyX" data-val="x">
            X
          </div>
          <div className="key" data-code="KeyC" data-val="c">
            C
          </div>
          <div className="key" data-code="KeyV" data-val="v">
            V
          </div>
          <div className="key" data-code="KeyB" data-val="b">
            B
          </div>
          <div className="key" data-code="KeyN" data-val="n">
            N
          </div>
          <div className="key" data-code="KeyM" data-val="m">
            M
          </div>
          <div className="key" data-code="Comma" data-val=",">
            <span className="two-value">&lt;</span>
            <span className="two-value">,</span>
          </div>
          <div className="key" data-code="Period" data-val=".">
            <span className="two-value">&gt;</span>
            <span className="two-value">.</span>
          </div>
          <div className="key" data-code="Slash" data-val="/">
            <span className="two-value">?</span>
            <span className="two-value">/</span>
          </div>
          <div className="key right-shift-key" data-code="ShiftRight">
            Shift
          </div>
        </div>
        <div className="row">
          <div className="key fn-key">Ctrl</div>
          <div className="key fn-key">-</div>
          <div className="key fn-key">Alt</div>
          <div className="key space-key" data-code="Space" data-val="Space">
            Space
          </div>
          <div className="key fn-key">Alt</div>
          <div className="key fn-key">Fn</div>
          <div className="key fn-key">-</div>
          <div className="key fn-key">Ctrl</div>
        </div>
      </div>
    </AppLayout>
  );
};

export default KeyboardPage;
