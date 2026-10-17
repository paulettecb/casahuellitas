/* @ds-bundle: {"format":4,"namespace":"CasaHuellitasDesignSystem_e868a6","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"MenuButton","sourcePath":"components/patterns/MenuButton.jsx"},{"name":"PhotoCard","sourcePath":"components/patterns/PhotoCard.jsx"},{"name":"PriceCard","sourcePath":"components/patterns/PriceCard.jsx"},{"name":"TimeBar","sourcePath":"components/patterns/TimeBar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ServiceCard","sourcePath":"components/surfaces/ServiceCard.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"16b6c909e6af","components/core/Button.jsx":"2dad1aecefc2","components/core/Icon.jsx":"843da44a1acb","components/core/IconButton.jsx":"26a638b34448","components/core/Logo.jsx":"59a851aa3872","components/feedback/Dialog.jsx":"615aec51b817","components/feedback/Toast.jsx":"3bf2c40caecb","components/feedback/Tooltip.jsx":"68cf22f51a27","components/forms/Checkbox.jsx":"81c0fdbb4e08","components/forms/Input.jsx":"af68df228074","components/forms/Radio.jsx":"9dcac1f5bd05","components/forms/Select.jsx":"68468e5e27b8","components/forms/Switch.jsx":"943806705591","components/patterns/MenuButton.jsx":"965c646e7f98","components/patterns/PhotoCard.jsx":"ce292a1a1cc3","components/patterns/PriceCard.jsx":"a053186096a8","components/patterns/TimeBar.jsx":"542dd8d2714e","components/surfaces/Card.jsx":"d1a61131c3d0","components/surfaces/ServiceCard.jsx":"22054b6e8242","components/surfaces/Tabs.jsx":"67a7d8d2b29b","sitio/fx.js":"646a2d1deb71","ui_kits/website-v1/Chrome.jsx":"cd73239d6f29","ui_kits/website-v1/Home.jsx":"612beab233dd","ui_kits/website-v1/Reserve.jsx":"0d4bd688a891","ui_kits/website/fx.js":"646a2d1deb71","ui_kits/website/reservas.js":"e6ab2aec3ca4","ui_kits/website/site.js":"cb4f86e45c60"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CasaHuellitasDesignSystem_e868a6 = window.CasaHuellitasDesignSystem_e868a6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = `https://unpkg.com/lucide-static@0.460.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      background: color,
      WebkitMask: `url(${url}) center/contain no-repeat`,
      mask: `url(${url}) center/contain no-repeat`,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  cielo: 'var(--cielo-200)',
  sol: 'var(--sol-400)',
  mandarina: 'var(--mandarina-400)',
  pasto: 'var(--pasto-200)',
  chicle: 'var(--chicle-200)',
  crema: 'var(--crema)',
  tinta: 'var(--tinta)'
};
function Badge({
  tone = 'cielo',
  icon,
  tilt = 0,
  sticker = false,
  size = 'md',
  children,
  style
}) {
  const fs = size === 'lg' ? 22 : size === 'sm' ? 12 : 15;
  const display = size === 'lg';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: TONES[tone],
      color: tone === 'tinta' ? 'var(--crema)' : 'var(--tinta)',
      border: '2px solid var(--tinta)',
      borderRadius: 999,
      padding: display ? '8px 18px' : size === 'sm' ? '3px 9px' : '5px 12px',
      font: display ? `500 ${fs}px/1 var(--font-display)` : `700 ${fs}px/1 var(--font-body)`,
      letterSpacing: display ? 0 : '0.02em',
      boxShadow: sticker ? 'var(--shadow-sticker-sm)' : 'none',
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: fs + 2
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 38,
    px: 16,
    fs: 15
  },
  md: {
    h: 48,
    px: 22,
    fs: 16
  },
  lg: {
    h: 58,
    px: 30,
    fs: 18
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary)',
    hover: 'var(--action-primary-hover)',
    fg: 'var(--tinta)',
    border: 'var(--tinta)',
    shadow: true
  },
  secondary: {
    bg: 'var(--cielo-200)',
    hover: 'var(--cielo-300)',
    fg: 'var(--tinta)',
    border: 'var(--tinta)',
    shadow: true
  },
  dark: {
    bg: 'var(--tinta)',
    hover: 'var(--tinta-80)',
    fg: 'var(--crema)',
    border: 'var(--tinta)',
    shadow: false
  },
  ghost: {
    bg: 'transparent',
    hover: 'var(--cielo-100)',
    fg: 'var(--tinta)',
    border: 'transparent',
    shadow: false
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled,
  fullWidth,
  children,
  onClick,
  href,
  style
}) {
  const [hov, setHov] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary,
    s = SIZES[size] || SIZES.md;
  const lift = v.shadow && !disabled;
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => {
      setHov(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: 999,
      border: `2px solid ${v.border}`,
      background: hov && !disabled ? v.hover : v.bg,
      color: v.fg,
      font: `700 ${s.fs}px/1 var(--font-body)`,
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      boxShadow: lift ? down ? '0 0 0 var(--tinta)' : hov ? '5px 5px 0 var(--tinta)' : 'var(--shadow-sticker-sm)' : 'none',
      transform: lift ? down ? 'translate(2px,2px)' : hov ? 'translate(-1px,-1px)' : 'none' : 'none',
      transition: 'all var(--dur-fast) var(--ease-out)',
      boxSizing: 'border-box',
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.fs + 3
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.fs + 3
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'secondary',
  size = 44,
  onClick,
  style
}) {
  const [hov, setHov] = React.useState(false);
  const bg = {
    primary: 'var(--action-primary)',
    secondary: 'var(--cielo-200)',
    light: 'var(--blanco)',
    dark: 'var(--tinta)'
  }[variant];
  const fg = variant === 'dark' ? 'var(--crema)' : 'var(--tinta)';
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '2px solid var(--tinta)',
      background: bg,
      color: fg,
      display: 'inline-grid',
      placeItems: 'center',
      cursor: 'pointer',
      padding: 0,
      boxShadow: hov ? '3px 3px 0 var(--tinta)' : 'none',
      transform: hov ? 'translate(-1px,-1px) rotate(-6deg)' : 'none',
      transition: 'all var(--dur-base) var(--ease-bounce)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  variant = 'badge',
  size = 120,
  base = '',
  style
}) {
  const p = f => `${base}assets/logo/${f}`;
  if (variant === 'badge') return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--cielo-200)',
      display: 'inline-grid',
      placeItems: 'center',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p('logo-ink.png'),
    alt: "Casa Huellitas",
    style: {
      width: '62%'
    }
  }));
  if (variant === 'horizontal') return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.22,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p('mark-ink.png'),
    alt: "",
    style: {
      height: size
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: p('wordmark-ink.png'),
    alt: "Casa Huellitas",
    style: {
      height: size * 0.42
    }
  }));
  const file = {
    stacked: 'logo-ink.png',
    'stacked-white': 'logo-white.png',
    mark: 'mark-ink.png',
    'mark-white': 'mark-white.png'
  }[variant];
  return /*#__PURE__*/React.createElement("img", {
    src: p(file),
    alt: "Casa Huellitas",
    style: {
      height: size,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  width = 480,
  inline,
  style
}) {
  if (!open) return null;
  const box = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--crema)',
      border: '2px solid var(--tinta)',
      borderRadius: 28,
      boxShadow: '8px 8px 0 var(--tinta)',
      padding: 28,
      position: 'relative',
      boxSizing: 'border-box',
      ...style
    }
  }, onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Cerrar",
    variant: "light",
    size: 38,
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 32px/1.05 var(--font-display)',
      marginBottom: 10,
      paddingRight: 40
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 16px/1.55 var(--font-body)',
      color: 'var(--text-body)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, actions));
  if (inline) return box;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(12,43,62,.45)',
      backdropFilter: 'blur(3px)',
      display: 'grid',
      placeItems: 'center',
      padding: 20,
      zIndex: 100
    }
  }, box);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  success: ['var(--pasto-200)', 'circle-check'],
  info: ['var(--cielo-200)', 'info'],
  warning: ['var(--sol-200)', 'triangle-alert'],
  danger: ['var(--danger-bg)', 'circle-x']
};
function Toast({
  tone = 'success',
  title,
  children,
  onClose,
  style
}) {
  const [bg, ic] = T[tone] || T.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: bg,
      border: '2px solid var(--tinta)',
      borderRadius: 18,
      padding: '14px 16px',
      boxShadow: 'var(--shadow-sticker-sm)',
      maxWidth: 420,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 22,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 15px/1.3 var(--font-body)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.45 var(--font-body)',
      color: 'var(--tinta-80)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      color: 'var(--tinta)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top',
  forceOpen,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const show = forceOpen || open;
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 10px)'
  } : {
    bottom: 'calc(100% + 10px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      ...pos,
      transform: `translateX(-50%) scale(${show ? 1 : .8})`,
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      background: 'var(--tinta)',
      color: 'var(--crema)',
      font: '600 13px/1.3 var(--font-body)',
      padding: '7px 12px',
      borderRadius: 10,
      whiteSpace: 'nowrap',
      transition: 'all var(--dur-base) var(--ease-bounce)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: '400 16px var(--font-body)',
      color: 'var(--tinta)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 7,
      border: '2px solid var(--tinta)',
      background: on ? 'var(--mandarina-400)' : 'var(--blanco)',
      display: 'grid',
      placeItems: 'center',
      transition: 'all var(--dur-fast) var(--ease-bounce)',
      transform: on ? 'scale(1.06)' : 'none',
      flex: 'none'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const labelStyle = {
  font: '700 14px/1.2 var(--font-body)',
  color: 'var(--tinta)'
};
const hintStyle = err => ({
  font: '400 13px/1.4 var(--font-body)',
  color: err ? 'var(--danger)' : 'var(--text-muted)'
});
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  icon,
  hint,
  error,
  disabled,
  multiline,
  rows = 4,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center',
      gap: 10,
      background: disabled ? 'var(--tinta-10)' : 'var(--blanco)',
      border: `2px solid ${error ? 'var(--danger)' : focus ? 'var(--tinta)' : 'var(--tinta-40)'}`,
      borderRadius: 14,
      padding: multiline ? '12px 14px' : '0 14px',
      minHeight: 48,
      boxShadow: focus ? '0 0 0 4px var(--cielo-200)' : 'none',
      transition: 'all var(--dur-fast)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--tinta-60)",
    style: {
      marginTop: multiline ? 2 : 0
    }
  }), /*#__PURE__*/React.createElement(Tag, {
    type: type,
    rows: multiline ? rows : undefined,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      font: '400 16px/1.4 var(--font-body)',
      color: 'var(--tinta)',
      resize: 'vertical',
      padding: multiline ? 0 : '12px 0'
    }
  })), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: hintStyle(!!error)
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column',
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 10,
      ...style
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = cur === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        font: '400 16px var(--font-body)',
        color: 'var(--tinta)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        border: '2px solid var(--tinta)',
        background: 'var(--blanco)',
        display: 'grid',
        placeItems: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: on ? 12 : 0,
        height: on ? 12 : 0,
        borderRadius: '50%',
        background: 'var(--tinta)',
        transition: 'all var(--dur-base) var(--ease-bounce)'
      }
    })), l);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const labelStyle = {
  font: '700 14px/1.2 var(--font-body)',
  color: 'var(--tinta)'
};
const hintStyle = err => ({
  font: '400 13px/1.4 var(--font-body)',
  color: err ? 'var(--danger)' : 'var(--text-muted)'
});
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  hint,
  disabled,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: defaultValue ?? (placeholder ? '' : undefined),
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      height: 48,
      padding: '0 42px 0 14px',
      borderRadius: 14,
      border: `2px solid ${focus ? 'var(--tinta)' : 'var(--tinta-40)'}`,
      background: 'var(--blanco)',
      font: '400 16px var(--font-body)',
      color: 'var(--tinta)',
      outline: 0,
      boxShadow: focus ? '0 0 0 4px var(--cielo-200)' : 'none',
      cursor: 'pointer'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      position: 'absolute',
      right: 14,
      top: 15,
      pointerEvents: 'none'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: hintStyle(false)
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      font: '400 16px var(--font-body)',
      color: 'var(--tinta)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 50,
      height: 30,
      borderRadius: 999,
      border: '2px solid var(--tinta)',
      background: on ? 'var(--pasto-400)' : 'var(--tinta-10)',
      position: 'relative',
      transition: 'background var(--dur-base)',
      flex: 'none',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 22 : 2,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--blanco)',
      border: '2px solid var(--tinta)',
      boxSizing: 'border-box',
      transition: 'left var(--dur-base) var(--ease-bounce)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/patterns/MenuButton.jsx
try { (() => {
const TONES = {
  blanco: '#FFFFFF',
  sol: 'var(--sol-400)',
  pasto: 'var(--pasto-200)',
  chicle: 'var(--chicle-200)',
  mandarina: 'var(--mandarina-200)',
  cielo: 'var(--cielo-200)'
};
function MenuButton({
  icon = 'paw-print',
  title,
  subtitle,
  tone = 'blanco',
  href,
  onClick,
  style
}) {
  const [hov, setHov] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      width: '100%',
      minHeight: 88,
      padding: '14px 26px',
      boxSizing: 'border-box',
      background: TONES[tone] || tone,
      color: 'var(--tinta)',
      border: '3px solid var(--tinta)',
      borderRadius: 26,
      boxShadow: hov ? '7px 7px 0 var(--tinta)' : '5px 5px 0 var(--tinta)',
      transform: hov ? 'translate(-2px,-2px)' : 'none',
      transition: 'all var(--dur-base) var(--ease-out)',
      textDecoration: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      font: 'inherit',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 58,
      height: 58,
      flex: 'none',
      borderRadius: '50%',
      background: '#FFFFFF',
      border: '3px solid var(--tinta)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 34px/1 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 17px/1.2 var(--font-body)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 36
  }));
}
Object.assign(__ds_scope, { MenuButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/MenuButton.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PhotoCard.jsx
try { (() => {
function PhotoCard({
  src,
  height = 320,
  position = 'center',
  icon,
  caption,
  subcaption,
  sticker = false,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      border: '3px solid var(--tinta)',
      borderRadius: 26,
      boxShadow: sticker ? '7px 7px 0 var(--tinta)' : 'none',
      background: `var(--arena-200) url(${src}) ${position}/cover no-repeat`
    }
  }), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 12
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '500 28px/1 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, caption), subcaption && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '600 15px/1.2 var(--font-body)',
      marginTop: 3
    }
  }, subcaption))));
}
Object.assign(__ds_scope, { PhotoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PhotoCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PriceCard.jsx
try { (() => {
const TONES = {
  cielo: 'var(--cielo-200)',
  sol: 'var(--sol-400)',
  blanco: '#FFFFFF',
  pasto: 'var(--pasto-200)'
};
function PriceCard({
  icon = 'moon',
  title,
  detail,
  price,
  note,
  tone = 'cielo',
  sticker = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      background: TONES[tone] || tone,
      border: '3px solid var(--tinta)',
      borderRadius: 30,
      boxShadow: sticker ? '8px 8px 0 var(--tinta)' : 'none',
      padding: '24px 28px',
      color: 'var(--tinta)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70,
      height: 70,
      flex: 'none',
      borderRadius: 'var(--radius-blob)',
      background: tone === 'blanco' ? 'var(--mandarina-400)' : '#FFFFFF',
      border: '3px solid var(--tinta)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 34
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 30px/1 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, title), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 17px/1.25 var(--font-body)',
      marginTop: 6
    }
  }, detail)), price && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 64px/1 var(--font-chunky)',
      whiteSpace: 'nowrap'
    }
  }, price), !price && note && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px/1.3 var(--font-body)',
      textAlign: 'right',
      maxWidth: 200
    }
  }, note));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/TimeBar.jsx
try { (() => {
const FILL = {
  verde: 'var(--pasto-400)',
  sol: 'var(--sol-400)',
  cielo: 'var(--cielo-200)',
  cerrado: 'repeating-linear-gradient(45deg,var(--tinta-10) 0 10px,#FFFFFF 10px 20px)'
};
function TimeBar({
  ticks = ['9 am', '2 pm', '6 pm'],
  segments = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: '700 15px/1 var(--font-body)',
      whiteSpace: 'nowrap'
    }
  }, ticks.map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 56,
      marginTop: 8,
      border: '3px solid var(--tinta)',
      borderRadius: 999,
      overflow: 'hidden',
      background: '#FFFFFF'
    }
  }, segments.map((sg, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: sg.span,
      background: FILL[sg.tone] || sg.tone,
      borderLeft: i ? '3px solid var(--tinta)' : 0,
      display: 'grid',
      placeItems: 'center',
      font: '500 22px/1 var(--font-display)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, sg.label))));
}
Object.assign(__ds_scope, { TimeBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/TimeBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
const BG = {
  blanco: 'var(--blanco)',
  cielo: 'var(--cielo-200)',
  crema: 'var(--crema)',
  arena: 'var(--arena-100)',
  sol: 'var(--sol-200)',
  pasto: 'var(--pasto-200)',
  chicle: 'var(--chicle-200)',
  tinta: 'var(--tinta)'
};
function Card({
  tone = 'blanco',
  elevation = 'sticker',
  interactive,
  padding = 24,
  radius = 24,
  children,
  onClick,
  style
}) {
  const [hov, setHov] = React.useState(false);
  const sh = elevation === 'sticker' ? interactive && hov ? '7px 7px 0 var(--tinta)' : 'var(--shadow-sticker)' : elevation === 'soft' ? 'var(--shadow-soft)' : 'none';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      background: BG[tone],
      color: tone === 'tinta' ? 'var(--crema)' : 'var(--tinta)',
      border: elevation === 'soft' ? '0' : '2px solid var(--tinta)',
      borderRadius: radius,
      padding,
      boxShadow: sh,
      transform: interactive && hov ? 'translate(-3px,-3px)' : 'none',
      transition: 'all var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : undefined,
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ServiceCard.jsx
try { (() => {
function ServiceCard({
  icon = 'paw-print',
  title,
  children,
  tone = 'blanco',
  iconTone = 'var(--cielo-200)',
  cta,
  onClick,
  image,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: tone,
    interactive: !!onClick,
    onClick: onClick,
    padding: 0,
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      background: `var(--arena-200) url(${image}) center/cover`,
      borderBottom: '2px solid var(--tinta)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-blob)',
      background: iconTone,
      border: '2px solid var(--tinta)',
      display: 'grid',
      placeItems: 'center',
      marginTop: image ? -50 : 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 28px/1.05 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 16px/1.5 var(--font-body)',
      color: 'var(--text-body)'
    }
  }, children), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 6,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: '700 15px var(--font-body)'
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  }))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--blanco)',
      border: '2px solid var(--tinta)',
      borderRadius: 999,
      ...style
    }
  }, tabs.map(t => {
    const v = t.value ?? t;
    const l = t.label ?? t;
    const on = v === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        border: 0,
        borderRadius: 999,
        padding: '10px 18px',
        background: on ? 'var(--tinta)' : 'transparent',
        color: on ? 'var(--crema)' : 'var(--tinta)',
        font: '700 15px/1 var(--font-body)',
        cursor: 'pointer',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// sitio/fx.js
try { (() => {
// Casa Huellitas — shared interaction effects for site explorations
(() => {
  const PAW = 'https://unpkg.com/lucide-static@0.460.0/icons/paw-print.svg';
  const css = document.createElement('style');
  css.textContent = `.fx-paw{position:fixed;width:26px;height:26px;pointer-events:none;z-index:9998;background:var(--tinta);-webkit-mask:url(${PAW}) center/contain no-repeat;mask:url(${PAW}) center/contain no-repeat;animation:fxPaw 1.1s ease-out forwards}
@keyframes fxPaw{0%{opacity:0;transform:var(--t) scale(.4)}15%{opacity:.85;transform:var(--t) scale(1)}100%{opacity:0;transform:var(--t) scale(.9)}}
[data-reveal]{opacity:0;transform:translateY(60px) rotate(var(--r,0deg));transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.34,1.56,.64,1)}
[data-reveal].in{opacity:1;transform:none}
.fx-wipe{--x:50%;--y:50%;position:fixed;inset:0;z-index:9999;pointer-events:none;background:var(--cielo-200);clip-path:circle(0 at var(--x) var(--y));transition:clip-path .55s cubic-bezier(.7,0,.3,1);display:grid;place-items:center}
.fx-wipe.on{clip-path:circle(150% at var(--x) var(--y))}
.fx-wipe img{width:140px;transform:scale(.6) rotate(-10deg);transition:transform .5s cubic-bezier(.34,1.56,.64,1) .15s}
.fx-wipe.on img{transform:none}
.fx-pop{position:absolute;font:400 44px/1 var(--font-chunky);pointer-events:none;animation:fxPop .9s ease-out forwards;white-space:nowrap}
@keyframes fxPop{0%{opacity:0;transform:translate(-50%,0) scale(.5)}30%{opacity:1;transform:translate(-50%,-30px) scale(1.15)}100%{opacity:0;transform:translate(-50%,-90px) scale(1)}}`;
  document.head.appendChild(css);
  function pawTrail(color) {
    let lx = 0,
      ly = 0,
      side = 1;
    const drop = (x, y) => {
      const dx = x - lx,
        dy = y - ly;
      if (dx * dx + dy * dy < 2600) return;
      const a = Math.atan2(dy, dx) * 180 / Math.PI + 90;
      side *= -1;
      const ox = Math.cos(a * Math.PI / 180) * 10 * side,
        oy = Math.sin(a * Math.PI / 180) * 10 * side;
      const p = document.createElement('i');
      p.className = 'fx-paw';
      p.style.left = x - 13 + ox + 'px';
      p.style.top = y - 13 + oy + 'px';
      p.style.setProperty('--t', `rotate(${a}deg)`);
      if (color) p.style.background = color;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1200);
      lx = x;
      ly = y;
    };
    addEventListener('pointermove', e => drop(e.clientX, e.clientY), {
      passive: true
    });
  }
  function reveal() {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }), {
      threshold: .15
    });
    document.querySelectorAll('[data-reveal]').forEach((el, i) => {
      el.style.transitionDelay = (el.dataset.delay || 0) + 'ms';
      io.observe(el);
    });
  }
  function parallax() {
    const els = [...document.querySelectorAll('[data-speed]')];
    const tick = () => {
      const y = scrollY;
      els.forEach(el => {
        const s = +el.dataset.speed;
        const rot = +(el.dataset.rot || 0);
        el.style.transform = `translate3d(0,${y * s}px,0) rotate(${rot + y * s * .05}deg)`;
      });
    };
    addEventListener('scroll', () => requestAnimationFrame(tick), {
      passive: true
    });
    tick();
  }
  function wipe(logoSrc) {
    const w = document.createElement('div');
    w.className = 'fx-wipe';
    w.innerHTML = `<img src="${logoSrc}" alt="">`;
    document.body.appendChild(w);
    document.addEventListener('click', e => {
      const a = e.target.closest('a[data-wipe]');
      if (!a) return;
      e.preventDefault();
      w.style.setProperty('--x', e.clientX + 'px');
      w.style.setProperty('--y', e.clientY + 'px');
      w.classList.add('on');
      setTimeout(() => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) scrollTo({
          top: t.offsetTop - 20,
          behavior: 'instant'
        });
        w.classList.remove('on');
      }, 750);
    });
  }

  // Fling-the-ball mini-game. stage: positioned element containing .fx-ball and .fx-dog
  function ballGame(stage, onScore) {
    const ball = stage.querySelector('.fx-ball'),
      dog = stage.querySelector('.fx-dog');
    let x = 60,
      y = 60,
      vx = 0,
      vy = 0,
      drag = false,
      px = 0,
      py = 0,
      last = 0,
      score = 0,
      cool = 0;
    const R = () => ball.offsetWidth / 2;
    const place = () => {
      ball.style.transform = `translate(${x - R()}px,${y - R()}px) rotate(${x * 2}deg)`;
    };
    const pt = e => {
      const r = stage.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    };
    ball.addEventListener('pointerdown', e => {
      drag = true;
      ball.setPointerCapture(e.pointerId);
      [px, py] = pt(e);
      last = performance.now();
      vx = vy = 0;
    });
    ball.addEventListener('pointermove', e => {
      if (!drag) return;
      const [nx, ny] = pt(e);
      const now = performance.now(),
        dt = Math.max(16, now - last);
      vx = (nx - px) / dt * 16;
      vy = (ny - py) / dt * 16;
      x = nx;
      y = ny;
      px = nx;
      py = ny;
      last = now;
      place();
    });
    ball.addEventListener('pointerup', () => {
      drag = false;
    });
    const step = () => {
      const W = stage.clientWidth,
        H = stage.clientHeight,
        r = R();
      if (!drag) {
        vy += .55;
        vx *= .995;
        x += vx;
        y += vy;
        if (x < r) {
          x = r;
          vx = -vx * .8;
        }
        if (x > W - r) {
          x = W - r;
          vx = -vx * .8;
        }
        if (y > H - r) {
          y = H - r;
          vy = -vy * .7;
          vx *= .9;
          if (Math.abs(vy) < 1) vy = 0;
        }
        if (y < r) {
          y = r;
          vy = -vy * .8;
        }
        place();
      }
      if (dog && cool <= 0) {
        const d = dog.getBoundingClientRect(),
          s = stage.getBoundingClientRect();
        const cx = d.left - s.left + d.width / 2,
          cy = d.top - s.top + d.height / 2;
        if (Math.hypot(cx - x, cy - y) < d.width / 2 + r * .6 && Math.hypot(vx, vy) > 3) {
          score++;
          cool = 40;
          vx = -vx * .6;
          vy = -Math.abs(vy) - 8;
          dog.animate([{
            transform: 'scale(1) rotate(0)'
          }, {
            transform: 'scale(1.18) rotate(-8deg)'
          }, {
            transform: 'scale(1) rotate(0)'
          }], {
            duration: 450,
            easing: 'cubic-bezier(.34,1.56,.64,1)'
          });
          const p = document.createElement('span');
          p.className = 'fx-pop';
          p.textContent = ['¡guau!', '¡otra!', '¡atrapada!', '¡bravo!'][score % 4];
          p.style.left = cx + 'px';
          p.style.top = cy - d.height / 2 + 'px';
          stage.appendChild(p);
          setTimeout(() => p.remove(), 900);
          onScore && onScore(score);
        }
      }
      cool--;
      requestAnimationFrame(step);
    };
    place();
    step();
  }
  window.HuellitasFX = {
    pawTrail,
    reveal,
    parallax,
    wipe,
    ballGame
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "sitio/fx.js", error: String((e && e.message) || e) }); }

// ui_kits/website-v1/Chrome.jsx
try { (() => {
(() => {
  const {
    Button,
    IconButton,
    Logo,
    Icon
  } = window.CasaHuellitasDesignSystem_e868a6;
  function SiteHeader({
    onReserve,
    page,
    setPage
  }) {
    const links = [['inicio', 'Inicio'], ['servicios', 'Servicios'], ['instalaciones', 'Instalaciones'], ['nosotros', 'Nosotros'], ['contacto', 'Contacto']];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(252,248,241,.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: '2px solid var(--tinta)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        setPage('inicio');
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "horizontal",
      size: 42,
      base: "../../"
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 22,
        marginLeft: 'auto'
      }
    }, links.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
      key: k,
      href: "#",
      onClick: e => {
        e.preventDefault();
        setPage(k);
      },
      style: {
        font: '600 15px var(--font-body)',
        color: 'var(--tinta)',
        textDecoration: 'none',
        borderBottom: page === k ? '2px solid var(--mandarina-400)' : '2px solid transparent',
        paddingBottom: 2
      }
    }, l))), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onReserve,
      iconRight: "arrow-right"
    }, "Reservar")));
  }
  function SiteFooter() {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--tinta)',
        color: 'var(--crema)',
        padding: '64px 32px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr 1fr',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
      variant: "stacked-white",
      size: 150,
      base: "../../"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        font: '400 15px/1.5 var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '700 12px var(--font-body)',
        letterSpacing: '.14em',
        color: 'var(--cielo-200)'
      }
    }, "CONTACTO"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), "[tel\xE9fono]"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16
    }), "[direcci\xF3n]"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 16
    }), "[horario]")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '700 12px var(--font-body)',
        letterSpacing: '.14em',
        color: 'var(--cielo-200)'
      }
    }, "S\xCDGUENOS"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "instagram",
      label: "Instagram"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "facebook",
      label: "Facebook"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "message-circle",
      label: "WhatsApp",
      variant: "primary"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '48px auto 0',
        paddingTop: 20,
        borderTop: '1px solid var(--tinta-80)',
        font: '400 13px var(--font-body)',
        color: 'var(--tinta-40)'
      }
    }, "\xA9 Casa Huellitas \xB7 Hotel y guarder\xEDa de perros sin jaulas"));
  }
  function Photo({
    label,
    ratio = '4/3',
    radius = 24,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: ratio,
        borderRadius: radius,
        border: '2px solid var(--tinta)',
        background: 'repeating-linear-gradient(45deg,var(--arena-100) 0 14px,var(--arena-200) 14px 28px)',
        display: 'grid',
        placeItems: 'center',
        font: '600 13px var(--font-body)',
        color: 'var(--tinta-60)',
        ...style
      }
    }, label);
  }
  Object.assign(window, {
    SiteHeader,
    SiteFooter,
    Photo
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v1/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v1/Home.jsx
try { (() => {
(() => {
  const {
    Button,
    Badge,
    ServiceCard,
    Card,
    Icon
  } = window.CasaHuellitasDesignSystem_e868a6;
  const wrap = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 32px'
  };
  function Hero({
    onReserve
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--cielo-200)',
        borderBottom: '2px solid var(--tinta)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 48,
        alignItems: 'center',
        padding: '80px 32px 96px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '700 12px var(--font-body)',
        letterSpacing: '.14em',
        color: 'var(--cielo-800)'
      }
    }, "HOTEL Y GUARDER\xCDA DE PERROS"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '14px 0 0',
        font: '400 112px/.92 var(--font-chunky)'
      }
    }, "\xA1sin jaulas!"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 20px/1.55 var(--font-body)',
        color: 'var(--tinta-80)',
        maxWidth: 480,
        margin: '20px 0 28px'
      }
    }, "Tu perrhijo se queda en familia: juega, nada en la alberquita y duerme en camita \u2014 vigilado las 24 horas."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onReserve,
      iconRight: "arrow-right"
    }, "Reservar estancia"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "dark",
      icon: "message-circle"
    }, "WhatsApp"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      label: "Foto: perros jugando en el patio",
      ratio: "1/1",
      radius: "48% 52% 46% 54% / 55% 48% 52% 45%",
      style: {
        boxShadow: '8px 8px 0 var(--tinta)'
      }
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: "sol",
      size: "lg",
      sticker: true,
      tilt: -6,
      style: {
        position: 'absolute',
        top: 24,
        left: -18
      }
    }, "CUIDADO 24 H"), /*#__PURE__*/React.createElement(Badge, {
      tone: "mandarina",
      size: "lg",
      sticker: true,
      tilt: 5,
      style: {
        position: 'absolute',
        bottom: 40,
        right: -10
      }
    }, "VIDEOS DIARIOS"))));
  }
  const SERVICES = [['house', 'Hotel sin jaulas', 'Estancias de una noche o de vacaciones completas, conviviendo en grupo.', 'var(--cielo-200)'], ['sun', 'Guardería por día', 'Que gaste su energía mientras tú haces tus pendientes.', 'var(--sol-400)'], ['truck', 'Pet Taxi', 'Pasamos por tu perro a casa y te lo regresamos feliz y cansado.', 'var(--mandarina-200)'], ['waves', 'Alberquita', 'Una alberca hecha especialmente para perros.', 'var(--pasto-200)']];
  function Services({
    onReserve
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '112px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 24,
        marginBottom: 40
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: '500 64px/1 var(--font-display)'
      }
    }, "LO QUE HACEMOS", /*#__PURE__*/React.createElement("br", null), "POR TU PERRO"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: 360,
        font: '400 17px/1.55 var(--font-body)',
        color: 'var(--text-body)'
      }
    }, "No es solo una mascota, es parte de la familia. As\xED lo cuidamos.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }
    }, SERVICES.map(([i, t, d, c]) => /*#__PURE__*/React.createElement(ServiceCard, {
      key: t,
      icon: i,
      title: t,
      iconTone: c,
      cta: "Saber m\xE1s",
      onClick: onReserve
    }, d)))));
  }
  function Promise() {
    const items = [['shield-check', 'Cuidadores profesionales 24 h'], ['video', 'Videos diarios de tu perro'], ['heart', 'Refuerzo positivo, siempre'], ['users', 'Grupos por tamaño y energía']];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--tinta)',
        color: 'var(--crema)',
        padding: '96px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      label: "Foto: cuidadora con perros",
      ratio: "5/4",
      style: {
        borderColor: 'var(--crema)'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 88px/1 var(--font-chunky)',
        color: 'var(--cielo-200)'
      }
    }, "como en casa"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16,
        marginTop: 28
      }
    }, items.map(([i, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        font: '500 26px/1.1 var(--font-display)',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'var(--cielo-200)',
        color: 'var(--tinta)',
        display: 'grid',
        placeItems: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 20
    })), t))))));
  }
  function CTA({
    onReserve
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '112px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "sol",
      padding: "56px 56px",
      radius: 36,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
        boxShadow: '8px 8px 0 var(--tinta)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: '500 52px/1 var(--font-display)'
      }
    }, "\xBFSE VAN DE VACACIONES?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '10px 0 0',
        font: '400 18px/1.5 var(--font-body)'
      }
    }, "Aparta su lugar \u2014 las fechas de temporada se llenan r\xE1pido.")), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "dark",
      onClick: onReserve,
      iconRight: "calendar"
    }, "Ver disponibilidad"))));
  }
  function HomePage({
    onReserve
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
      onReserve: onReserve
    }), /*#__PURE__*/React.createElement(Services, {
      onReserve: onReserve
    }), /*#__PURE__*/React.createElement(Promise, null), /*#__PURE__*/React.createElement(CTA, {
      onReserve: onReserve
    }));
  }
  Object.assign(window, {
    HomePage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v1/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-v1/Reserve.jsx
try { (() => {
(() => {
  const {
    Dialog,
    Input,
    Select,
    Radio,
    Checkbox,
    Button,
    Toast
  } = window.CasaHuellitasDesignSystem_e868a6;
  function ReserveDialog({
    open,
    onClose
  }) {
    const [step, setStep] = React.useState(0);
    React.useEffect(() => {
      if (open) setStep(0);
    }, [open]);
    if (!open) return null;
    if (step === 1) return /*#__PURE__*/React.createElement(Dialog, {
      title: "\xA1Listo, guau!",
      onClose: onClose,
      actions: /*#__PURE__*/React.createElement(Button, {
        onClick: onClose
      }, "Entendido")
    }, "Recibimos tu solicitud. Te escribimos por WhatsApp para confirmar fechas y mandarte los requisitos.", /*#__PURE__*/React.createElement(Toast, {
      tone: "info",
      title: "Recuerda",
      style: {
        marginTop: 16
      }
    }, "Trae su cartilla de vacunaci\xF3n vigente."));
    return /*#__PURE__*/React.createElement(Dialog, {
      title: "Reserva su lugar",
      onClose: onClose,
      width: 560,
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: onClose
      }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
        onClick: () => setStep(1),
        iconRight: "send"
      }, "Enviar solicitud"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      direction: "row",
      defaultValue: "hotel",
      options: [{
        value: 'hotel',
        label: 'Hotel'
      }, {
        value: 'dia',
        label: 'Guardería por día'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Nombre de tu perro",
      icon: "paw-print",
      placeholder: "Ej. Canela"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Tama\xF1o",
      placeholder: "Elige",
      options: ['Chico', 'Mediano', 'Grande']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Entrada",
      type: "date",
      icon: "calendar"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Salida",
      type: "date",
      icon: "calendar"
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Tu WhatsApp",
      icon: "phone",
      placeholder: "10 d\xEDgitos"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Necesito Pet Taxi (recolecci\xF3n a domicilio)"
    })));
  }
  Object.assign(window, {
    ReserveDialog
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-v1/Reserve.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/fx.js
try { (() => {
// Casa Huellitas — shared interaction effects for site explorations
(() => {
  const PAW = 'https://unpkg.com/lucide-static@0.460.0/icons/paw-print.svg';
  const css = document.createElement('style');
  css.textContent = `.fx-paw{position:fixed;width:26px;height:26px;pointer-events:none;z-index:9998;background:var(--tinta);-webkit-mask:url(${PAW}) center/contain no-repeat;mask:url(${PAW}) center/contain no-repeat;animation:fxPaw 1.1s ease-out forwards}
@keyframes fxPaw{0%{opacity:0;transform:var(--t) scale(.4)}15%{opacity:.85;transform:var(--t) scale(1)}100%{opacity:0;transform:var(--t) scale(.9)}}
[data-reveal]{opacity:0;transform:translateY(60px) rotate(var(--r,0deg));transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.34,1.56,.64,1)}
[data-reveal].in{opacity:1;transform:none}
.fx-wipe{--x:50%;--y:50%;position:fixed;inset:0;z-index:9999;pointer-events:none;background:var(--cielo-200);clip-path:circle(0 at var(--x) var(--y));transition:clip-path .55s cubic-bezier(.7,0,.3,1);display:grid;place-items:center}
.fx-wipe.on{clip-path:circle(150% at var(--x) var(--y))}
.fx-wipe img{width:140px;transform:scale(.6) rotate(-10deg);transition:transform .5s cubic-bezier(.34,1.56,.64,1) .15s}
.fx-wipe.on img{transform:none}
.fx-pop{position:absolute;font:400 44px/1 var(--font-chunky);pointer-events:none;animation:fxPop .9s ease-out forwards;white-space:nowrap}
@keyframes fxPop{0%{opacity:0;transform:translate(-50%,0) scale(.5)}30%{opacity:1;transform:translate(-50%,-30px) scale(1.15)}100%{opacity:0;transform:translate(-50%,-90px) scale(1)}}`;
  document.head.appendChild(css);
  function pawTrail(color) {
    let lx = 0,
      ly = 0,
      side = 1;
    const drop = (x, y) => {
      const dx = x - lx,
        dy = y - ly;
      if (dx * dx + dy * dy < 2600) return;
      const a = Math.atan2(dy, dx) * 180 / Math.PI + 90;
      side *= -1;
      const ox = Math.cos(a * Math.PI / 180) * 10 * side,
        oy = Math.sin(a * Math.PI / 180) * 10 * side;
      const p = document.createElement('i');
      p.className = 'fx-paw';
      p.style.left = x - 13 + ox + 'px';
      p.style.top = y - 13 + oy + 'px';
      p.style.setProperty('--t', `rotate(${a}deg)`);
      if (color) p.style.background = color;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1200);
      lx = x;
      ly = y;
    };
    addEventListener('pointermove', e => drop(e.clientX, e.clientY), {
      passive: true
    });
  }
  function reveal() {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }), {
      threshold: .15
    });
    document.querySelectorAll('[data-reveal]').forEach((el, i) => {
      el.style.transitionDelay = (el.dataset.delay || 0) + 'ms';
      io.observe(el);
    });
  }
  function parallax() {
    const els = [...document.querySelectorAll('[data-speed]')];
    const tick = () => {
      const y = scrollY;
      els.forEach(el => {
        const s = +el.dataset.speed;
        const rot = +(el.dataset.rot || 0);
        el.style.transform = `translate3d(0,${y * s}px,0) rotate(${rot + y * s * .05}deg)`;
      });
    };
    addEventListener('scroll', () => requestAnimationFrame(tick), {
      passive: true
    });
    tick();
  }
  function wipe(logoSrc) {
    const w = document.createElement('div');
    w.className = 'fx-wipe';
    w.innerHTML = `<img src="${logoSrc}" alt="">`;
    document.body.appendChild(w);
    document.addEventListener('click', e => {
      const a = e.target.closest('a[data-wipe]');
      if (!a) return;
      e.preventDefault();
      w.style.setProperty('--x', e.clientX + 'px');
      w.style.setProperty('--y', e.clientY + 'px');
      w.classList.add('on');
      setTimeout(() => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) scrollTo({
          top: t.offsetTop - 20,
          behavior: 'instant'
        });
        w.classList.remove('on');
      }, 750);
    });
  }

  // Fling-the-ball mini-game. stage: positioned element containing .fx-ball and .fx-dog
  function ballGame(stage, onScore) {
    const ball = stage.querySelector('.fx-ball'),
      dog = stage.querySelector('.fx-dog');
    let x = 60,
      y = 60,
      vx = 0,
      vy = 0,
      drag = false,
      px = 0,
      py = 0,
      last = 0,
      score = 0,
      cool = 0;
    const R = () => ball.offsetWidth / 2;
    const place = () => {
      ball.style.transform = `translate(${x - R()}px,${y - R()}px) rotate(${x * 2}deg)`;
    };
    const pt = e => {
      const r = stage.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    };
    ball.addEventListener('pointerdown', e => {
      drag = true;
      ball.setPointerCapture(e.pointerId);
      [px, py] = pt(e);
      last = performance.now();
      vx = vy = 0;
    });
    ball.addEventListener('pointermove', e => {
      if (!drag) return;
      const [nx, ny] = pt(e);
      const now = performance.now(),
        dt = Math.max(16, now - last);
      vx = (nx - px) / dt * 16;
      vy = (ny - py) / dt * 16;
      x = nx;
      y = ny;
      px = nx;
      py = ny;
      last = now;
      place();
    });
    ball.addEventListener('pointerup', () => {
      drag = false;
    });
    const step = () => {
      const W = stage.clientWidth,
        H = stage.clientHeight,
        r = R();
      if (!drag) {
        vy += .55;
        vx *= .995;
        x += vx;
        y += vy;
        if (x < r) {
          x = r;
          vx = -vx * .8;
        }
        if (x > W - r) {
          x = W - r;
          vx = -vx * .8;
        }
        if (y > H - r) {
          y = H - r;
          vy = -vy * .7;
          vx *= .9;
          if (Math.abs(vy) < 1) vy = 0;
        }
        if (y < r) {
          y = r;
          vy = -vy * .8;
        }
        place();
      }
      if (dog && cool <= 0) {
        const d = dog.getBoundingClientRect(),
          s = stage.getBoundingClientRect();
        const cx = d.left - s.left + d.width / 2,
          cy = d.top - s.top + d.height / 2;
        if (Math.hypot(cx - x, cy - y) < d.width / 2 + r * .6 && Math.hypot(vx, vy) > 3) {
          score++;
          cool = 40;
          vx = -vx * .6;
          vy = -Math.abs(vy) - 8;
          dog.animate([{
            transform: 'scale(1) rotate(0)'
          }, {
            transform: 'scale(1.18) rotate(-8deg)'
          }, {
            transform: 'scale(1) rotate(0)'
          }], {
            duration: 450,
            easing: 'cubic-bezier(.34,1.56,.64,1)'
          });
          const p = document.createElement('span');
          p.className = 'fx-pop';
          p.textContent = ['¡guau!', '¡otra!', '¡atrapada!', '¡bravo!'][score % 4];
          p.style.left = cx + 'px';
          p.style.top = cy - d.height / 2 + 'px';
          stage.appendChild(p);
          setTimeout(() => p.remove(), 900);
          onScore && onScore(score);
        }
      }
      cool--;
      requestAnimationFrame(step);
    };
    place();
    step();
  }
  window.HuellitasFX = {
    pawTrail,
    reveal,
    parallax,
    wipe,
    ballGame
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/fx.js", error: String((e && e.message) || e) }); }

// ui_kits/website/reservas.js
try { (() => {
// Reservation flow (visual only — no backend yet)
(() => {
  const $ = id => document.getElementById(id);
  const I = n => `https://unpkg.com/lucide-static@0.460.0/icons/${n}.svg`;
  const ic = (n, s = 22) => `<i class="ic" style="--i:url(${I(n)});width:${s}px;height:${s}px"></i>`;
  const STEPS = ['Servicio', 'Fechas', 'Perrito', 'Requisitos', 'Tus datos'];
  const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const S = {
    step: 0,
    max: 0,
    svc: 'hotel',
    start: null,
    end: null,
    days: [],
    tin: null,
    tout: null,
    dogs: [{
      name: '',
      breed: '',
      age: '',
      file: ''
    }],
    req: [false, false, false, false],
    pay: null,
    view: new Date(today.getFullYear(), today.getMonth(), 1)
  };
  const money = n => '$' + n.toLocaleString('es-MX');
  const fmtD = d => d.getDate() + ' ' + MONTHS[d.getMonth()].slice(0, 3);
  const same = (a, b) => a && b && a.getTime() === b.getTime();
  const hm = m => {
    let h = Math.floor(m / 60),
      mm = m % 60;
    const ap = h >= 12 ? 'pm' : 'am';
    h = h > 12 ? h - 12 : h;
    return h + ':' + String(mm).padStart(2, '0') + ' ' + ap;
  };
  const range = (a, b) => {
    const r = [];
    for (let m = a; m <= b; m += 30) r.push(m);
    return r;
  };

  // steps header
  const stepsEl = $('steps');
  const drawSteps = () => {
    stepsEl.innerHTML = STEPS.map((t, i) => `<button type="button" data-i="${i}" class="${i === S.step ? 'on' : ''} ${i < S.max || i < S.step ? 'done' : ''}" ${i > S.max ? 'disabled' : ''}><i>${i < S.step ? '✓' : i + 1}</i>${t}</button>`).join('');
  };
  stepsEl.onclick = e => {
    const b = e.target.closest('button');
    if (b && !b.disabled) go(+b.dataset.i);
  };

  // service
  document.querySelectorAll('input[name=svc]').forEach(r => r.onchange = () => {
    S.svc = r.value;
    S.start = S.end = null;
    S.days = [];
    S.tin = S.tout = null;
    drawCal();
    drawTimes();
    upd();
  });

  // calendar
  const drawCal = () => {
    const v = S.view,
      y = v.getFullYear(),
      m = v.getMonth(),
      first = (new Date(y, m, 1).getDay() + 6) % 7,
      n = new Date(y, m + 1, 0).getDate();
    const canPrev = v > new Date(today.getFullYear(), today.getMonth(), 1);
    let h = `<div class="hd"><button type="button" id="cp" aria-label="Mes anterior" ${canPrev ? '' : 'disabled style="opacity:.3"'}>${ic('chevron-left')}</button><b>${MONTHS[m]} ${y}</b><button type="button" id="cn" aria-label="Mes siguiente">${ic('chevron-right')}</button></div><div class="g">`;
    h += ['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(d => `<div class="dw">${d}</div>`).join('');
    for (let i = 0; i < first; i++) h += '<span></span>';
    for (let d = 1; d <= n; d++) {
      const dt = new Date(y, m, d),
        cls = [];
      if (same(dt, today)) cls.push('today');
      if (S.svc === 'hotel') {
        if (same(dt, S.start)) cls.push('s');
        if (same(dt, S.end)) cls.push('e');
        if (S.start && S.end && dt > S.start && dt < S.end) cls.push('in');
      } else if (S.days.some(x => same(x, dt))) cls.push('pk');
      h += `<button type="button" class="d ${cls.join(' ')}" data-t="${dt.getTime()}" ${dt < today ? 'disabled' : ''}>${d}</button>`;
    }
    $('cal').innerHTML = h + '</div>';
    $('cp').onclick = () => {
      if (canPrev) {
        S.view = new Date(y, m - 1, 1);
        drawCal();
      }
    };
    $('cn').onclick = () => {
      S.view = new Date(y, m + 1, 1);
      drawCal();
    };
  };
  $('cal').addEventListener('click', e => {
    const b = e.target.closest('.d');
    if (!b || b.disabled) return;
    const dt = new Date(+b.dataset.t);
    if (S.svc === 'hotel') {
      if (!S.start || S.end || dt <= S.start) {
        S.start = dt;
        S.end = null;
      } else S.end = dt;
    } else {
      const i = S.days.findIndex(x => same(x, dt));
      i >= 0 ? S.days.splice(i, 1) : S.days.push(dt);
      S.days.sort((a, b) => a - b);
    }
    drawCal();
    upd();
  });

  // times
  const drawTimes = () => {
    const hotel = S.svc === 'hotel';
    $('dTitle').textContent = hotel ? '¿Qué noches?' : '¿Qué días?';
    $('dLead').textContent = hotel ? 'Toca el día de entrada y luego el de salida.' : 'Toca todos los días que vendrá. Puedes elegir varios.';
    const ins = hotel ? range(540, 840) : range(600, 840),
      outs = hotel ? range(540, 1080) : range(840, 1080);
    $('tin').innerHTML = ins.map(m => `<button type="button" data-m="${m}" class="${S.tin === m ? 'on' : ''}">${hm(m)}</button>`).join('');
    $('tout').innerHTML = outs.map(m => `<button type="button" data-m="${m}" class="${S.tout === m ? 'on' : ''} ${hotel && m > 840 ? 'late' : ''}">${hm(m)}</button>`).join('');
  };
  $('tin').onclick = e => {
    const b = e.target.closest('button');
    if (!b) return;
    S.tin = +b.dataset.m;
    drawTimes();
    upd();
  };
  $('tout').onclick = e => {
    const b = e.target.closest('button');
    if (!b) return;
    S.tout = +b.dataset.m;
    drawTimes();
    upd();
  };

  // dogs
  const drawDogs = () => {
    $('dogs').innerHTML = S.dogs.map((d, i) => `<div class="dog" data-i="${i}">${S.dogs.length > 1 ? `<button type="button" class="x" data-rm="${i}" aria-label="Quitar">${ic('x')}</button>` : ''}<div class="t">${ic('paw-print', 30)}PERRITO ${i + 1}</div>
  <div class="row3"><div class="f"><label>NOMBRE</label><input data-k="name" value="${d.name}"></div><div class="f"><label>RAZA</label><input data-k="breed" value="${d.breed}" placeholder="o mestizo"></div><div class="f"><label>EDAD</label><input data-k="age" value="${d.age}" placeholder="años"></div></div>
  <label class="up ${d.file ? 'ok' : ''}"><input type="file" accept="image/*,.pdf" data-k="file">${ic(d.file ? 'check' : 'camera', 34)}<div><b>${d.file ? d.file : 'Foto de su cartilla de vacunación'}</b><small>${d.file ? 'Toca para cambiarla' : 'Toca para subirla'}</small></div></label></div>`).join('');
  };
  $('dogs').addEventListener('input', e => {
    const k = e.target.dataset.k;
    if (!k || k === 'file') return;
    S.dogs[+e.target.closest('.dog').dataset.i][k] = e.target.value;
    upd(false);
  });
  $('dogs').addEventListener('change', e => {
    if (e.target.dataset.k !== 'file') return;
    const f = e.target.files[0];
    if (f) {
      S.dogs[+e.target.closest('.dog').dataset.i].file = f.name;
      drawDogs();
      upd();
    }
  });
  $('dogs').addEventListener('click', e => {
    const b = e.target.closest('[data-rm]');
    if (b) {
      S.dogs.splice(+b.dataset.rm, 1);
      drawDogs();
      upd();
    }
  });
  $('addDog').onclick = () => {
    S.dogs.push({
      name: '',
      breed: '',
      age: '',
      file: ''
    });
    drawDogs();
    upd();
  };

  // requirements
  const RQ = [['VACUNAS AL DÍA', 'Séxtuple, Bordetella, Giardia y Rabia'], ['DESPARASITADO', 'y con antipulgas / garrapatas'], ['100% SOCIABLE', 'con perros y personas'], ['SIN CELO', 'durante la estancia']];
  $('reqs').innerHTML = RQ.map(([a, b], i) => `<label><input type="checkbox" data-r="${i}"><span class="bx">${ic('check', 28)}</span><span><b>${a}</b><small>${b}</small></span></label>`).join('');
  $('reqs').addEventListener('change', e => {
    S.req[+e.target.dataset.r] = e.target.checked;
    upd();
  });

  // owner
  ['oName', 'oPhone'].forEach(id => $(id).addEventListener('input', () => upd(false)));
  $('xTrans').onchange = () => {
    $('addrBox').style.display = $('xTrans').checked ? '' : 'none';
    upd();
  };
  $('xBath').onchange = () => upd();
  $('pay').onclick = e => {
    const b = e.target.closest('button');
    if (!b) return;
    S.pay = b.dataset.v;
    [...$('pay').children].forEach(x => x.classList.toggle('on', x === b));
    upd();
  };

  // validation + summary
  const valid = i => {
    if (i === 0) return [true];
    if (i === 1) {
      const d = S.svc === 'hotel' ? S.start && S.end : S.days.length;
      if (!d) return [false, S.svc === 'hotel' ? 'Elige entrada y salida' : 'Elige al menos un día'];
      if (S.tin == null || S.tout == null) return [false, 'Elige los horarios'];
      return [true];
    }
    if (i === 2) {
      const bad = S.dogs.find(d => !d.name.trim() || !d.breed.trim() || !d.age.trim());
      if (bad) return [false, 'Completa nombre, raza y edad'];
      if (S.dogs.some(d => !d.file)) return [false, 'Falta la foto de la cartilla'];
      return [true];
    }
    if (i === 3) {
      const c = S.req.filter(Boolean).length;
      return c === 4 ? [true] : [false, `Van ${c} de 4`];
    }
    if (i === 4) {
      if (!$('oName').value.trim()) return [false, 'Escribe tu nombre'];
      if ($('oPhone').value.replace(/\D/g, '').length < 10) return [false, 'Escribe tu WhatsApp (10 dígitos)'];
      if (!S.pay) return [false, 'Elige cómo vas a pagar'];
      return [true];
    }
  };
  const calc = () => {
    const n = S.dogs.length,
      hotel = S.svc === 'hotel';
    const units = hotel ? S.start && S.end ? Math.round((S.end - S.start) / 864e5) : 0 : S.days.length;
    const sub = units * (hotel ? 350 : 200) * n,
      late = hotel && S.tout > 840 && units ? 200 * n : 0;
    return {
      n,
      units,
      sub,
      late,
      tot: sub + late,
      hotel
    };
  };
  const upd = (redraw = true) => {
    const c = calc();
    $('sSvc').textContent = c.hotel ? 'Hotel / Pensión' : 'Guardería / Daypass';
    $('sDates').textContent = c.hotel ? S.start ? fmtD(S.start) + (S.end ? ' → ' + fmtD(S.end) + ` (${c.units} ${c.units === 1 ? 'noche' : 'noches'})` : ' → ?') : '—' : S.days.length ? S.days.map(fmtD).join(', ') : '—';
    $('sTimes').textContent = S.tin != null || S.tout != null ? (S.tin != null ? hm(S.tin) : '?') + ' → ' + (S.tout != null ? hm(S.tout) : '?') : '—';
    const names = S.dogs.map(d => d.name.trim()).filter(Boolean);
    $('sDogs').textContent = names.length ? names.join(', ') : c.n + (c.n === 1 ? ' perrito' : ' perritos');
    $('sSub').textContent = c.units ? `${c.units} × ${money(c.hotel ? 350 : 200)}${c.n > 1 ? ' × ' + c.n : ''}` : '—';
    $('sLateRow').style.display = c.late ? '' : 'none';
    $('sLate').textContent = '+' + money(c.late);
    $('lateNote').style.display = c.hotel && S.tout > 840 ? '' : 'none';
    const t = $('sTot'),
      nt = money(c.tot);
    if (t.textContent !== nt) {
      t.textContent = nt;
      t.animate([{
        transform: 'scale(1.12) rotate(-3deg)'
      }, {
        transform: 'none'
      }], {
        duration: 400,
        easing: 'cubic-bezier(.34,1.56,.64,1)'
      });
    }
    const ex = [$('xTrans').checked && 'transporte', $('xBath').checked && 'baño'].filter(Boolean);
    $('sNote').textContent = (ex.length ? 'Te cotizamos ' + ex.join(' y ') + ' aparte. ' : 'Transporte y baño se cotizan aparte. ') + 'Se paga al llegar' + (S.pay ? ' (' + S.pay.toLowerCase() + ').' : '.');
    const [ok, msg] = valid(S.step);
    $('nextB').disabled = !ok;
    $('hint').textContent = ok ? '' : msg || '';
    $('nextB').innerHTML = S.step === 4 ? `Enviar solicitud ${ic('send')}` : `Siguiente ${ic('arrow-right')}`;
    $('back').style.visibility = S.step ? 'visible' : 'hidden';
  };
  const go = i => {
    S.step = i;
    S.max = Math.max(S.max, i);
    document.querySelectorAll('.pane').forEach(p => p.classList.toggle('on', +p.dataset.step === i));
    drawSteps();
    upd();
    const top = $('form').getBoundingClientRect().top + scrollY - 100;
    if (scrollY > top) scrollTo({
      top,
      behavior: 'smooth'
    });
  };
  $('back').onclick = () => go(Math.max(0, S.step - 1));
  $('nextB').onclick = () => {
    if (!valid(S.step)[0]) return;
    if (S.step < 4) go(S.step + 1);else submit();
  };
  const submit = () => {
    $('code').textContent = 'CH-' + Math.random().toString(36).slice(2, 6).toUpperCase();
    document.querySelectorAll('.pane').forEach(p => p.classList.remove('on'));
    $('nav2').style.display = 'none';
    stepsEl.style.display = 'none';
    $('done').classList.add('on');
    scrollTo({
      top: $('form').getBoundingClientRect().top + scrollY - 100,
      behavior: 'smooth'
    });
    confetti();
  };
  $('again').onclick = () => location.reload();
  const confetti = () => {
    const cv = $('confetti'),
      cx = cv.getContext('2d'),
      dpr = Math.min(2, devicePixelRatio || 1);
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    const C = ['#FF8A4C', '#FFC93C', '#6DBE6B', '#F28DA6', '#5DB2E3', '#FFFFFF'];
    const P = Array.from({
      length: 60
    }, (_, i) => ({
      x: innerWidth / 2,
      y: innerHeight * .45,
      vx: (Math.random() - .5) * 22,
      vy: -Math.random() * 20 - 6,
      r: 8 + Math.random() * 14,
      c: C[i % 6]
    }));
    const t0 = performance.now();
    (function f(now) {
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx.clearRect(0, 0, innerWidth, innerHeight);
      P.forEach(p => {
        p.vy += .6;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= .99;
        cx.beginPath();
        cx.arc(p.x, p.y, p.r, 0, 6.2832);
        cx.fillStyle = p.c;
        cx.fill();
        cx.lineWidth = 2.5;
        cx.strokeStyle = '#141414';
        cx.stroke();
      });
      if (now - t0 < 2600) requestAnimationFrame(f);else cx.clearRect(0, 0, innerWidth, innerHeight);
    })(t0);
  };
  drawSteps();
  drawCal();
  drawTimes();
  drawDogs();
  upd();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/reservas.js", error: String((e && e.message) || e) }); }

// ui_kits/website/site.js
try { (() => {
// Shared chrome: nav, drawer, footer, page transitions
(() => {
  const PAGES = [['index.html', 'Inicio'], ['hotel.html', 'Hotel / Pensión'], ['guarderia.html', 'Guardería / Daypass'], ['precios.html', 'Precios'], ['horarios.html', 'Horarios'], ['requisitos.html', 'Requisitos'], ['instalaciones.html', 'Instalaciones'], ['preguntas.html', 'Preguntas'], ['resenas.html', 'Reseñas'], ['nosotros.html', 'Nosotros y ubicación'], ['reservas.html', 'Reservar']];
  const MAIN = ['hotel.html', 'guarderia.html', 'precios.html', 'horarios.html', 'requisitos.html'];
  const here = location.pathname.split('/').pop() || 'index.html';
  const I = n => `https://unpkg.com/lucide-static@0.460.0/icons/${n}.svg`;
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML = `<a href="index.html" data-go><img src="../../assets/logo/mark-ink.png" alt="Casa Huellitas"></a><div class="l">${PAGES.filter(p => MAIN.includes(p[0])).map(([h, t]) => `<a href="${h}" data-go class="${h === here ? 'on' : ''}">${t.split(' / ')[0]}</a>`).join('')}</div><a class="btn" href="reservas.html" data-go style="padding:9px 18px;font-size:14px;box-shadow:3px 3px 0 var(--tinta)">Reservar</a><button class="more" id="more"><i class="ic" style="--i:url(${I('menu')})"></i>Menú</button>`;
  document.body.prepend(nav);
  const dr = document.createElement('div');
  dr.className = 'drawer';
  dr.innerHTML = PAGES.map(([h, t], i) => `<a href="${h}" data-go style="transition-delay:${80 + i * 40}ms">${t.toLowerCase()}</a>`).join('') + `<div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap;justify-content:center"><a class="btn dk" href="https://www.instagram.com/casa_huellitas" style="font:800 16px var(--font-body);opacity:1;transform:none">@casa_huellitas</a></div>`;
  document.body.appendChild(dr);
  const mb = nav.querySelector('#more');
  mb.onclick = () => {
    const on = dr.classList.toggle('on');
    mb.innerHTML = on ? `<i class="ic" style="--i:url(${I('x')})"></i>Cerrar` : `<i class="ic" style="--i:url(${I('menu')})"></i>Menú`;
  };
  const ft = document.createElement('footer');
  ft.className = 'foot';
  ft.innerHTML = `<div class="wrap"><div class="g"><div><img src="../../assets/logo/logo-white.png" alt="Casa Huellitas" style="height:150px"></div>
<div><h4>SERVICIOS</h4><a href="hotel.html" data-go>Hotel / Pensión</a><a href="guarderia.html" data-go>Guardería / Daypass</a><a href="precios.html" data-go>Precios</a><a href="horarios.html" data-go>Horarios</a></div>
<div><h4>ANTES DE VENIR</h4><a href="requisitos.html" data-go>Requisitos</a><a href="preguntas.html" data-go>Preguntas frecuentes</a><a href="instalaciones.html" data-go>Instalaciones</a><a href="resenas.html" data-go>Reseñas</a></div>
<div><h4>VISÍTANOS</h4><a href="nosotros.html" data-go>Agua Blanca, frente a Bugambilias</a><a href="https://g.co/kgs/T5Ybaf">Cómo llegar</a><a href="https://www.instagram.com/casa_huellitas">@casa_huellitas</a><span style="display:block;padding:4px 0;font:600 16px var(--font-body)">L–D · 9:00 am – 6:00 pm</span></div></div>
<div style="margin-top:50px;padding-top:20px;border-top:1px solid #333;font:500 13px var(--font-body);color:var(--tinta-40)">© Casa Huellitas · Hotel canino</div></div>`;
  document.body.appendChild(ft);
  // page transition: balls rain in, settle, then the floor opens and the curtain lifts
  const po = document.createElement('div');
  po.className = 'fx-pageout';
  po.innerHTML = '<canvas></canvas><div class="ld"><img src="../../assets/logo/mark-ink.png" alt=""></div>';
  document.body.appendChild(po);
  const cv = po.querySelector('canvas'),
    cx = cv.getContext('2d');
  const COLS = ['#FF8A4C', '#FFC93C', '#6DBE6B', '#F28DA6', '#FFFFFF', '#5DB2E3'];
  let balls = [],
    running = false,
    floor = true,
    t0 = 0;
  const dpr = Math.min(2, devicePixelRatio || 1);
  const size = () => {
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
  };
  const spawn = n => {
    const W = innerWidth,
      m = Math.min(W, innerHeight);
    balls = Array.from({
      length: n
    }, (_, i) => {
      const r = m * (.035 + Math.random() * .035);
      return {
        x: r + Math.random() * (W - 2 * r),
        y: -r - 10,
        r,
        vx: (Math.random() - .5) * 3,
        vy: 2 + Math.random() * 3,
        c: COLS[i % COLS.length],
        a: Math.random() * 6,
        t: i * 28
      };
    });
  };
  const draw = now => {
    if (!running) return;
    const W = innerWidth,
      H = innerHeight,
      el = now - t0;
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx.clearRect(0, 0, W, H);
    const live = balls.filter(b => el > b.t);
    for (const b of live) {
      b.vy += .6;
      b.x += b.vx;
      b.y += b.vy;
      b.a += b.vx / b.r;
      if (floor && b.y > H - b.r) {
        b.y = H - b.r;
        b.vy = Math.abs(b.vy) < 2 ? 0 : -b.vy * .62;
        b.vx *= .96;
      }
      if (b.x < b.r) {
        b.x = b.r;
        b.vx = Math.abs(b.vx) * .7;
      }
      if (b.x > W - b.r) {
        b.x = W - b.r;
        b.vx = -Math.abs(b.vx) * .7;
      }
    }
    for (let i = 0; i < live.length; i++) for (let j = i + 1; j < live.length; j++) {
      const p = live[i],
        q = live[j],
        dx = q.x - p.x,
        dy = q.y - p.y,
        d = Math.hypot(dx, dy),
        m = p.r + q.r;
      if (d > 0 && d < m) {
        const nx = dx / d,
          ny = dy / d,
          o = (m - d) / 2;
        p.x -= nx * o;
        p.y -= ny * o;
        q.x += nx * o;
        q.y += ny * o;
        const rv = (q.vx - p.vx) * nx + (q.vy - p.vy) * ny;
        if (rv < 0) {
          const k = -rv * .8;
          p.vx -= nx * k;
          p.vy -= ny * k;
          q.vx += nx * k;
          q.vy += ny * k;
        }
      }
    }
    for (const b of live) {
      cx.save();
      cx.translate(b.x, b.y);
      cx.rotate(b.a);
      cx.beginPath();
      cx.arc(0, 0, b.r, 0, 6.2832);
      cx.fillStyle = b.c;
      cx.fill();
      cx.lineWidth = 3;
      cx.strokeStyle = '#141414';
      cx.stroke();
      cx.lineWidth = Math.max(2, b.r * .08);
      cx.beginPath();
      cx.arc(-b.r * 1.15, 0, b.r * .85, -.75, .75);
      cx.stroke();
      cx.beginPath();
      cx.arc(b.r * 1.15, 0, b.r * .85, Math.PI - .75, Math.PI + .75);
      cx.stroke();
      cx.restore();
    }
    requestAnimationFrame(draw);
  };
  const start = n => {
    size();
    spawn(n);
    floor = true;
    t0 = performance.now();
    if (!running) {
      running = true;
      requestAnimationFrame(draw);
    }
  };
  addEventListener('resize', size);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const first = !sessionStorage.getItem('ch-visited');
  sessionStorage.setItem('ch-visited', '1');
  const lift = wait => setTimeout(() => {
    floor = false;
    balls.forEach(b => {
      b.vy = Math.max(b.vy, 4);
    });
    setTimeout(() => po.classList.add('off'), 350);
    setTimeout(() => {
      running = false;
    }, 1200);
  }, wait);
  if (reduce) {
    po.classList.add('off');
  } else {
    start(first ? 40 : 24);
    lift(first ? 2000 : 1300);
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[data-go]');
    if (!a || e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    if (reduce) {
      location.href = a.getAttribute('href');
      return;
    }
    po.style.transition = 'none';
    po.classList.remove('off');
    po.classList.add('from');
    po.style.setProperty('--x', e.clientX + 'px');
    po.style.setProperty('--y', e.clientY + 'px');
    po.offsetWidth;
    po.style.transition = '';
    po.classList.remove('from');
    running = false;
    cx.clearRect(0, 0, cv.width, cv.height);
    setTimeout(() => {
      location.href = a.getAttribute('href');
    }, 600);
  });
  addEventListener('pageshow', e => {
    if (e.persisted) {
      po.classList.add('off');
      running = false;
    }
  });
  if (window.HuellitasFX) {
    HuellitasFX.pawTrail();
    HuellitasFX.reveal();
    HuellitasFX.parallax();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.MenuButton = __ds_scope.MenuButton;

__ds_ns.PhotoCard = __ds_scope.PhotoCard;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.TimeBar = __ds_scope.TimeBar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
