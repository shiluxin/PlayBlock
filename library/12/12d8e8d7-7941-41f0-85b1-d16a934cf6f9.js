"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, Prefab, instantiate, systemEvent, RigidBodyComponent, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, shoot;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      systemEvent = _cc.systemEvent;
      RigidBodyComponent = _cc.RigidBodyComponent;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "12d8ejXeUFB8IWx0WqTTPb5", "shoot"); // begin shoot


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("shoot", shoot = (_dec = ccclass("shoot"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: cc.Float
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(shoot, _Component);

        function shoot() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, shoot);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(shoot)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "bulletPrefab", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "speed", _descriptor2, babelHelpers.assertThisInitialized(_this));
          _this.offset = new Vec3();
          _this.point = new Vec3();
          return _this;
        }

        babelHelpers.createClass(shoot, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            systemEvent.on(Node.EventType.TOUCH_END, function () {
              _this2.shoot();
            });
            systemEvent.on(Node.EventType.KEY_DOWN, this.onKeyDown, this);
            systemEvent.on(Node.EventType.KEY_UP, this.onKeyUp, this);
          }
        }, {
          key: "shoot",
          value: function shoot() {
            var node = instantiate(this.bulletPrefab);
            node.parent = this.node.parent;
            node.position = this.node.position;
            var bulletCom = node.getComponent(RigidBodyComponent);
            bulletCom.applyImpulse(new Vec3(0, 2.29, -2 * this.speed));
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            cc.log(event);
            var rotation = this.node.eulerAngles;
            var position = this.node.getPosition();

            switch (event.keyCode) {
              case cc.macro.KEY.w:
                this.offset.y = 1;
                break;

              case cc.macro.KEY.s:
                this.offset.y = -1;
                break;

              case cc.macro.KEY.a:
                this.offset.x = -1;
                break;

              case cc.macro.KEY.d:
                this.offset.x = 1;
                break;
            }
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp() {
            this.offset.x = 0;
            this.offset.y = 0;
            this.offset.z = 0;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            //计算要移动的目标位置
            Vec3.add(this.point, this.node.position, this.offset); //插值计算

            Vec3.lerp(this.point, this.node.position, this.point, deltaTime * this.speed); //移动节点

            this.node.setPosition(this.point);
          }
        }]);
        return shoot;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "speed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end shoot

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdHMvc2hvb3QudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInN5c3RlbUV2ZW50IiwiUmlnaWRCb2R5Q29tcG9uZW50IiwiVmVjMyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInNob290IiwidHlwZSIsImNjIiwiRmxvYXQiLCJvZmZzZXQiLCJwb2ludCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJLRVlfVVAiLCJvbktleVVwIiwibm9kZSIsImJ1bGxldFByZWZhYiIsInBhcmVudCIsInBvc2l0aW9uIiwiYnVsbGV0Q29tIiwiZ2V0Q29tcG9uZW50IiwiYXBwbHlJbXB1bHNlIiwic3BlZWQiLCJldmVudCIsImxvZyIsInJvdGF0aW9uIiwiZXVsZXJBbmdsZXMiLCJnZXRQb3NpdGlvbiIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInciLCJ5IiwicyIsImEiLCJ4IiwiZCIsInoiLCJkZWx0YVRpbWUiLCJhZGQiLCJsZXJwIiwic2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0lBLE1BQUFBLFUsT0FBQUEsVTtBQUNBQyxNQUFBQSxTLE9BQUFBLFM7QUFDQUMsTUFBQUEsSSxPQUFBQSxJO0FBQ0FDLE1BQUFBLE0sT0FBQUEsTTtBQUNBQyxNQUFBQSxXLE9BQUFBLFc7QUFDQUMsTUFBQUEsVyxPQUFBQSxXO0FBQ0FDLE1BQUFBLGtCLE9BQUFBLGtCO0FBQ0FDLE1BQUFBLEksT0FBQUEsSTs7OzRFQU5xRTs7O0FBUWpFQyxNQUFBQSxPLEdBQXNCUixVLENBQXRCUSxPO0FBQVNDLE1BQUFBLFEsR0FBYVQsVSxDQUFiUyxROzt1QkFHSkMsSyxXQURaRixPQUFPLENBQUMsT0FBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUVSO0FB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QXZFLEVBSnVCLENBS3ZCOztBQUNBLGlCQUFLUCxJQUFMLENBQVUwQixXQUFWLENBQXNCLEtBQUtsQyxLQUEzQjtBQUNIOzs7UUF0RHNCZCxTOzs7OztpQkFFTyxJOzs7Ozs7O2lCQUd0QixDOzs7O29CQWhCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBfZGVjb3JhdG9yLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTm9kZSxcclxuICAgIFByZWZhYixcclxuICAgIGluc3RhbnRpYXRlLFxyXG4gICAgc3lzdGVtRXZlbnQsXHJcbiAgICBSaWdpZEJvZHlDb21wb25lbnQsXHJcbiAgICBWZWMzLFxyXG59IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJzaG9vdFwiKVxyXG5leHBvcnQgY2xhc3Mgc2hvb3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBQcmVmYWJ9KVxyXG4gICAgcHVibGljIGJ1bGxldFByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkZsb2F0fSlcclxuICAgIHNwZWVkID0gMDtcclxuXHJcbiAgICBwdWJsaWMgb2Zmc2V0IDogVmVjMyA9IG5ldyBWZWMzKCk7XHJcbiAgICBwdWJsaWMgcG9pbnQgOiBWZWMzID0gbmV3IFZlYzMoKTtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgc3lzdGVtRXZlbnQub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7dGhpcy5zaG9vdCgpfSk7XHJcbiAgICAgICAgc3lzdGVtRXZlbnQub24oTm9kZS5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihOb2RlLkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBzaG9vdCAoKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIG5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XHJcblxyXG4gICAgICAgIGxldCBidWxsZXRDb206IFJpZ2lkQm9keUNvbXBvbmVudCA9IG5vZGUuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keUNvbXBvbmVudCk7XHJcbiAgICAgICAgYnVsbGV0Q29tLmFwcGx5SW1wdWxzZShuZXcgVmVjMygwLCAyLjI5LCAtMiAqIHRoaXMuc3BlZWQpKTtcclxuICAgIH1cclxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcclxuICAgICAgICBjYy5sb2coZXZlbnQpO1xyXG4gICAgICAgIGxldCByb3RhdGlvbiA9IHRoaXMubm9kZS5ldWxlckFuZ2xlcztcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueSA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcclxuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0LnkgPSAtMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldC54ID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uS2V5VXAgKCkge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0LnggPSAwO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0LnkgPSAwO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0LnogPSAwO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIC8v6K6h566X6KaB56e75Yqo55qE55uu5qCH5L2N572uXHJcbiAgICAgICAgVmVjMy5hZGQodGhpcy5wb2ludCwgdGhpcy5ub2RlLnBvc2l0aW9uLCB0aGlzLm9mZnNldCk7XHJcbiAgICAgICAgLy/mj5LlgLzorqHnrpdcclxuICAgICAgICBWZWMzLmxlcnAodGhpcy5wb2ludCwgdGhpcy5ub2RlLnBvc2l0aW9uLCB0aGlzLnBvaW50LCBkZWx0YVRpbWUgKiB0aGlzLnNwZWVkKTtcclxuICAgICAgICAvL+enu+WKqOiKgueCuVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLnBvaW50KTtcclxuICAgIH1cclxufVxyXG4iXX0=