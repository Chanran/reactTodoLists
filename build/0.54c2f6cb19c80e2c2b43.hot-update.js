webpackHotUpdate(0,{

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(79), RootInstanceProvider = __webpack_require__(87), ReactMount = __webpack_require__(89), React = __webpack_require__(174); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(174);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputTodo = function (_Component) {
	  _inherits(InputTodo, _Component);

	  function InputTodo(props, context) {
	    _classCallCheck(this, InputTodo);

	    return _possibleConstructorReturn(this, (InputTodo.__proto__ || Object.getPrototypeOf(InputTodo)).call(this, props, context));
	  }

	  _createClass(InputTodo, [{
	    key: 'addTodoKeydown',
	    value: function addTodoKeydown(e) {
	      if (e.which === 13) {
	        e.preventDefault();
	        var text = this.refs.input.value.trim();
	        if (text.length > 0) {
	          this.props.newTodo(text);
	          this.refs.input.value = '';
	        }
	      }
	    }
	  }, {
	    key: 'addTodoClick',
	    value: function addTodoClick(e) {
	      console.log(this);
	      e.preventDefault();
	      var text = this.refs.input.value.trim();
	      if (text.length > 0) {
	        this.props.newTodo(text);
	        this.refs.input.value = '';
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'inputContainer' },
	        _react2.default.createElement('input', { className: 'addTodoInput', type: 'text', ref: 'input', autoFocus: 'true', placeholder: '\u6DFB\u52A0\u65B0\u7684todo...', onKeyDown: function onKeyDown(e) {
	            return _this2.addTodoKeydown(e);
	          } }),
	        _react2.default.createElement(
	          'button',
	          { className: 'submitBtn', type: 'button', onClick: function onClick(e) {
	              return _this2.addTodoClick(e);
	            } },
	          '\u6DFB\u52A0'
	        )
	      );
	    }
	  }]);

	  return InputTodo;
	}(_react.Component);

	exports.default = InputTodo;


	InputTodo.propTypes = {
	  newTodo: _react.PropTypes.func.isRequired
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(665); if (makeExportsHot(module, __webpack_require__(174))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "InputTodo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})