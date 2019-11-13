"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, Prefab, instantiate, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, game;

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
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "8bac3SDtb9PuLsxg+t2J/op", "game"); // begin game


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("game", game = (_dec = ccclass("game"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(game, _Component);

        function game() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, game);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(game)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "blockPrefab", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "UINode", _descriptor2, babelHelpers.assertThisInitialized(_this));
          _this.createNum = 56;
          return _this;
        }

        babelHelpers.createClass(game, [{
          key: "start",

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            this.UINode.active = true;
            this.blockParent = this.node.parent.getChildByName('block');

            for (var i = 0; i < this.createNum; i++) {
              this.addBlock(i);
            }
          }
        }, {
          key: "closeUINode",
          value: function closeUINode() {
            this.UINode.active = false;
          }
        }, {
          key: "addBlock",
          value: function addBlock(index) {
            var num = index % 20;
            var hight = Math.floor(index / 20);
            console.log('num = ' + num + ',hight = ' + hight);
            var node = this.blockParent.getChildByName('block_' + num.toString() + '_' + hight.toString());

            if (node === null) {
              node = instantiate(this.blockPrefab);
              node.name = 'block_' + num.toString() + '_' + hight.toString();
              node.parent = this.blockParent;

              if (num === 0) {
                this.setPos = new Vec3(num, hight, 0);
              } else {
                var lastNode = this.blockParent.getChildByName('block_' + (num - 1).toString() + '_' + hight.toString());
                var pos = lastNode.position;

                if (num % 2 === 0) {
                  this.setPos = new Vec3(-pos.x, hight, 0);
                } else {
                  this.setPos = new Vec3(pos.x + num, hight, 0);
                }
              }

              console.log('this.setPos = ' + JSON.stringify(this.setPos));
              node.setPosition(this.setPos);
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return game;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "blockPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "UINode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end game

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdHMvZ2FtZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVmVjMyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsImdhbWUiLCJ0eXBlIiwiY3JlYXRlTnVtIiwiVUlOb2RlIiwiYWN0aXZlIiwiYmxvY2tQYXJlbnQiLCJub2RlIiwicGFyZW50IiwiZ2V0Q2hpbGRCeU5hbWUiLCJpIiwiYWRkQmxvY2siLCJpbmRleCIsIm51bSIsImhpZ2h0IiwiTWF0aCIsImZsb29yIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwiYmxvY2tQcmVmYWIiLCJuYW1lIiwic2V0UG9zIiwibGFzdE5vZGUiLCJwb3MiLCJwb3NpdGlvbiIsIngiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsSSxPQUFBQSxJOzs7MkVBRWM7OztBQURqRUMsTUFBQUEsTyxHQUFzQk4sVSxDQUF0Qk0sTztBQUFTQyxNQUFBQSxRLEdBQWFQLFUsQ0FBYk8sUTs7c0JBR0pDLEksV0FEWkYsT0FBTyxDQUFDLE1BQUQsQyxVQUlIQyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFTjtBQUFQLE9BQUQsQyxVQUVSSSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFUDtBQUFQLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFHVFEsUyxHQUFZLEU7Ozs7Ozs7QUFJWjtBQUNBO0FBQ0E7a0NBRVM7QUFDTCxpQkFBS0MsTUFBTCxDQUFZQyxNQUFaLEdBQXFCLElBQXJCO0FBQ0EsaUJBQUtDLFdBQUwsR0FBbUIsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxjQUFqQixDQUFnQyxPQUFoQyxDQUFuQjs7QUFDQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtQLFNBQXpCLEVBQW9DTyxDQUFDLEVBQXJDLEVBQXdDO0FBQ3BDLG1CQUFLQyxRQUFMLENBQWNELENBQWQ7QUFDSDtBQUNKOzs7d0NBQ2M7QUFDWCxpQkFBS04sTUFBTCxDQUFZQyxNQUFaLEdBQXFCLEtBQXJCO0FBQ0g7OzttQ0FDU08sSyxFQUFPO0FBQ2IsZ0JBQUlDLEdBQUcsR0FBR0QsS0FBSyxHQUFHLEVBQWxCO0FBQ0EsZ0JBQUlFLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEtBQUssR0FBQyxFQUFqQixDQUFaO0FBQ0FLLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVNMLEdBQVQsR0FBYSxXQUFiLEdBQXlCQyxLQUFyQztBQUNBLGdCQUFJUCxJQUFJLEdBQUcsS0FBS0QsV0FBTCxDQUFpQkcsY0FBakIsQ0FBZ0MsV0FBU0ksR0FBRyxDQUFDTSxRQUFKLEVBQVQsR0FBd0IsR0FBeEIsR0FBNEJMLEtBQUssQ0FBQ0ssUUFBTixFQUE1RCxDQUFYOztBQUNBLGdCQUFJWixJQUFJLEtBQUssSUFBYixFQUFrQjtBQUNkQSxjQUFBQSxJQUFJLEdBQUdWLFdBQVcsQ0FBQyxLQUFLdUIsV0FBTixDQUFsQjtBQUNBYixjQUFBQSxJQUFJLENBQUNjLElBQUwsR0FBWSxXQUFTUixHQUFHLENBQUNNLFFBQUosRUFBVCxHQUF3QixHQUF4QixHQUE0QkwsS0FBSyxDQUFDSyxRQUFOLEVBQXhDO0FBQ0FaLGNBQUFBLElBQUksQ0FBQ0MsTUFBTCxHQUFjLEtBQUtGLFdBQW5COztBQUNBLGtCQUFJTyxHQUFHLEtBQUssQ0FBWixFQUFjO0FBQ1YscUJBQUtTLE1BQUwsR0FBYyxJQUFJeEIsSUFBSixDQUFTZSxHQUFULEVBQWNDLEtBQWQsRUFBcUIsQ0FBckIsQ0FBZDtBQUNILGVBRkQsTUFFTTtBQUNGLG9CQUFJUyxRQUFRLEdBQUcsS0FBS2pCLFdBQUwsQ0FBaUJHLGNBQWpCLENBQWdDLFdBQVMsQ0FBQ0ksR0FBRyxHQUFFLENBQU4sRUFBU00sUUFBVCxFQUFULEdBQTZCLEdBQTdCLEdBQWlDTCxLQUFLLENBQUNLLFFBQU4sRUFBakUsQ0FBZjtBQUNBLG9CQUFJSyxHQUFHLEdBQUdELFFBQVEsQ0FBQ0UsUUFBbkI7O0FBQ0Esb0JBQUlaLEdBQUcsR0FBRyxDQUFOLEtBQVksQ0FBaEIsRUFBa0I7QUFDZCx1QkFBS1MsTUFBTCxHQUFjLElBQUl4QixJQUFKLENBQVMsQ0FBQzBCLEdBQUcsQ0FBQ0UsQ0FBZCxFQUFpQlosS0FBakIsRUFBd0IsQ0FBeEIsQ0FBZDtBQUNILGlCQUZELE1BRU87QUFDSCx1QkFBS1EsTUFBTCxHQUFjLElBQUl4QixJQUFKLENBQVMwQixHQUFHLENBQUNFLENBQUosR0FBTWIsR0FBZixFQUFvQkMsS0FBcEIsRUFBMkIsQ0FBM0IsQ0FBZDtBQUNIO0FBQ0o7O0FBQ0RHLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFpQlMsSUFBSSxDQUFDQyxTQUFMLENBQWUsS0FBS04sTUFBcEIsQ0FBN0I7QUFDQWYsY0FBQUEsSUFBSSxDQUFDc0IsV0FBTCxDQUFpQixLQUFLUCxNQUF0QjtBQUNIO0FBQ0osVyxDQUNEO0FBQ0E7QUFDQTs7OztRQXBEc0I1QixTOzs7OztpQkFJTyxJOzs7Ozs7O2lCQUVQLEk7Ozs7b0JBUlIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIFZlYzN9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJnYW1lXCIpXHJcbmV4cG9ydCBjbGFzcyBnYW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcclxuICAgIHB1YmxpYyBibG9ja1ByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogTm9kZX0pXHJcbiAgICBwdWJsaWMgVUlOb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBjcmVhdGVOdW0gPSA1NjtcclxuXHJcbiAgICBwdWJsaWMgYmxvY2tQYXJlbnQ6IGFueTtcclxuICAgIHB1YmxpYyBzZXRQb3MgOiBhbnk7XHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5VSU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJsb2NrUGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZSgnYmxvY2snKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3JlYXRlTnVtOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJsb2NrKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsb3NlVUlOb2RlICgpIHtcclxuICAgICAgICB0aGlzLlVJTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGFkZEJsb2NrIChpbmRleCkge1xyXG4gICAgICAgIGxldCBudW0gPSBpbmRleCAlIDIwO1xyXG4gICAgICAgIGxldCBoaWdodCA9IE1hdGguZmxvb3IoaW5kZXgvMjApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdudW0gPSAnK251bSsnLGhpZ2h0ID0gJytoaWdodCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmJsb2NrUGFyZW50LmdldENoaWxkQnlOYW1lKCdibG9ja18nK251bS50b1N0cmluZygpKydfJytoaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCl7XHJcbiAgICAgICAgICAgIG5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmJsb2NrUHJlZmFiKTtcclxuICAgICAgICAgICAgbm9kZS5uYW1lID0gJ2Jsb2NrXycrbnVtLnRvU3RyaW5nKCkrJ18nK2hpZ2h0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ibG9ja1BhcmVudDtcclxuICAgICAgICAgICAgaWYgKG51bSA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvcyA9IG5ldyBWZWMzKG51bSwgaGlnaHQsIDApO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdE5vZGUgPSB0aGlzLmJsb2NrUGFyZW50LmdldENoaWxkQnlOYW1lKCdibG9ja18nKyhudW0gLTEpLnRvU3RyaW5nKCkrJ18nK2hpZ2h0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IGxhc3ROb2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSAlIDIgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zID0gbmV3IFZlYzMoLXBvcy54LCBoaWdodCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zID0gbmV3IFZlYzMocG9zLngrbnVtLCBoaWdodCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuc2V0UG9zID0gJytKU09OLnN0cmluZ2lmeSh0aGlzLnNldFBvcykpO1xyXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuc2V0UG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==