"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, Prefab, instantiate, systemEvent, RigidBodyComponent, Vec3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, shoot;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
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
      }), _dec4 = property({
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
          babelHelpers.initializerDefineProperty(_this, "moveSpeed", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "bulletStartSpeed", _descriptor3, babelHelpers.assertThisInitialized(_this));
          _this.isClick = false;
          _this.offset = new Vec3();
          _this.point = new Vec3();
          return _this;
        }

        babelHelpers.createClass(shoot, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            systemEvent.on(Node.EventType.TOUCH_START, function () {
              _this2.isClick = true;
            });
            systemEvent.on(Node.EventType.TOUCH_END, function () {
              _this2.shoot();

              _this2.isClick = false;
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
            bulletCom.applyImpulse(new Vec3(0, 2.29, -1 * this.bulletStartSpeed));
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

            Vec3.lerp(this.point, this.node.position, this.point, deltaTime * this.moveSpeed); //移动节点

            this.node.setPosition(this.point);

            if (this.isClick) {
              if (this.bulletStartSpeed < 20) {
                this.bulletStartSpeed += deltaTime * 10;
              }
            } else {
              this.bulletStartSpeed = 1;
            }
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
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "bulletStartSpeed", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end shoot

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdHMvc2hvb3QudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInN5c3RlbUV2ZW50IiwiUmlnaWRCb2R5Q29tcG9uZW50IiwiVmVjMyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInNob290IiwidHlwZSIsImNjIiwiRmxvYXQiLCJpc0NsaWNrIiwib2Zmc2V0IiwicG9pbnQiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiVE9VQ0hfRU5EIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJLRVlfVVAiLCJvbktleVVwIiwibm9kZSIsImJ1bGxldFByZWZhYiIsInBhcmVudCIsInBvc2l0aW9uIiwiYnVsbGV0Q29tIiwiZ2V0Q29tcG9uZW50IiwiYXBwbHlJbXB1bHNlIiwiYnVsbGV0U3RhcnRTcGVlZCIsImV2ZW50IiwibG9nIiwicm90YXRpb24iLCJldWxlckFuZ2xlcyIsImdldFBvc2l0aW9uIiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwidyIsInkiLCJzIiwiYSIsIngiLCJkIiwieiIsImRlbHRhVGltZSIsImFkZCIsImxlcnAiLCJtb3ZlU3BlZWQiLCJzZXRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNJQSxNQUFBQSxVLE9BQUFBLFU7QUFDQUMsTUFBQUEsUyxPQUFBQSxTO0FBQ0FDLE1BQUFBLEksT0FBQUEsSTtBQUNBQyxNQUFBQSxNLE9BQUFBLE07QUFDQUMsTUFBQUEsVyxPQUFBQSxXO0FBQ0FDLE1BQUFBLFcsT0FBQUEsVztBQUNBQyxNQUFBQSxrQixPQUFBQSxrQjtBQUNBQyxNQUFBQSxJLE9BQUFBLEk7Ozs0RUFOcUU7OztBQVFqRUMsTUFBQUEsTyxHQUFzQlIsVSxDQUF0QlEsTztBQUFTQyxNQUFBQSxRLEdBQWFULFUsQ0FBYlMsUTs7dUJBR0pDLEssV0FEWkYsT0FBTyxDQUFD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QkFBSzNCLE1BQUwsQ0FBWWdDLENBQVosR0FBZ0IsQ0FBaEI7QUFDSDs7O2lDQUNPQyxTLEVBQW1CO0FBQ3ZCO0FBQ0F6QyxZQUFBQSxJQUFJLENBQUMwQyxHQUFMLENBQVMsS0FBS2pDLEtBQWQsRUFBcUIsS0FBS1MsSUFBTCxDQUFVRyxRQUEvQixFQUF5QyxLQUFLYixNQUE5QyxFQUZ1QixDQUd2Qjs7QUFDQVIsWUFBQUEsSUFBSSxDQUFDMkMsSUFBTCxDQUFVLEtBQUtsQyxLQUFmLEVBQXNCLEtBQUtTLElBQUwsQ0FBVUcsUUFBaEMsRUFBMEMsS0FBS1osS0FBL0MsRUFBc0RnQyxTQUFTLEdBQUcsS0FBS0csU0FBdkUsRUFKdUIsQ0FLdkI7O0FBQ0EsaUJBQUsxQixJQUFMLENBQVUyQixXQUFWLENBQXNCLEtBQUtwQyxLQUEzQjs7QUFDQSxnQkFBSSxLQUFLRixPQUFULEVBQWlCO0FBQ2Isa0JBQUksS0FBS2tCLGdCQUFMLEdBQXdCLEVBQTVCLEVBQWdDO0FBQzVCLHFCQUFLQSxnQkFBTCxJQUF5QmdCLFNBQVMsR0FBQyxFQUFuQztBQUNIO0FBQ0osYUFKRCxNQUlPO0FBQ0gsbUJBQUtoQixnQkFBTCxHQUF3QixDQUF4QjtBQUNIO0FBQ0o7OztRQXRFc0IvQixTOzs7OztpQkFFTyxJOzs7Ozs7O2lCQUdsQixDOzs7Ozs7O2lCQUVPLEM7Ozs7b0JBbEJMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIF9kZWNvcmF0b3IsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOb2RlLFxyXG4gICAgUHJlZmFiLFxyXG4gICAgaW5zdGFudGlhdGUsXHJcbiAgICBzeXN0ZW1FdmVudCxcclxuICAgIFJpZ2lkQm9keUNvbXBvbmVudCxcclxuICAgIFZlYzMsXHJcbn0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcInNob290XCIpXHJcbmV4cG9ydCBjbGFzcyBzaG9vdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IFByZWZhYn0pXHJcbiAgICBwdWJsaWMgYnVsbGV0UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuRmxvYXR9KVxyXG4gICAgbW92ZVNwZWVkID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuRmxvYXR9KVxyXG4gICAgYnVsbGV0U3RhcnRTcGVlZCA9IDE7XHJcblxyXG4gICAgcHVibGljIGlzQ2xpY2sgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBvZmZzZXQgOiBWZWMzID0gbmV3IFZlYzMoKTtcclxuICAgIHB1YmxpYyBwb2ludCA6IFZlYzMgPSBuZXcgVmVjMygpO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihOb2RlLkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKE5vZGUuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuICAgIHNob290ICgpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgbGV0IGJ1bGxldENvbTogUmlnaWRCb2R5Q29tcG9uZW50ID0gbm9kZS5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTtcclxuICAgICAgICBidWxsZXRDb20uYXBwbHlJbXB1bHNlKG5ldyBWZWMzKDAsIDIuMjksIC0xICogdGhpcy5idWxsZXRTdGFydFNwZWVkKSk7XHJcbiAgICB9XHJcbiAgICBvbktleURvd24gKGV2ZW50KSB7XHJcbiAgICAgICAgY2MubG9nKGV2ZW50KTtcclxuICAgICAgICBsZXQgcm90YXRpb24gPSB0aGlzLm5vZGUuZXVsZXJBbmdsZXM7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcclxuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0LnkgPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldC55ID0gLTE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0LnggPSAtMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueCA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbktleVVwICgpIHtcclxuICAgICAgICB0aGlzLm9mZnNldC54ID0gMDtcclxuICAgICAgICB0aGlzLm9mZnNldC55ID0gMDtcclxuICAgICAgICB0aGlzLm9mZnNldC56ID0gMDtcclxuICAgIH1cclxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICAvL+iuoeeul+imgeenu+WKqOeahOebruagh+S9jee9rlxyXG4gICAgICAgIFZlYzMuYWRkKHRoaXMucG9pbnQsIHRoaXMubm9kZS5wb3NpdGlvbiwgdGhpcy5vZmZzZXQpO1xyXG4gICAgICAgIC8v5o+S5YC86K6h566XXHJcbiAgICAgICAgVmVjMy5sZXJwKHRoaXMucG9pbnQsIHRoaXMubm9kZS5wb3NpdGlvbiwgdGhpcy5wb2ludCwgZGVsdGFUaW1lICogdGhpcy5tb3ZlU3BlZWQpO1xyXG4gICAgICAgIC8v56e75Yqo6IqC54K5XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMucG9pbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2spe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idWxsZXRTdGFydFNwZWVkIDwgMjApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0U3RhcnRTcGVlZCArPSBkZWx0YVRpbWUqMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJ1bGxldFN0YXJ0U3BlZWQgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=