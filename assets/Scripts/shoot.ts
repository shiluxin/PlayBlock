import {
    _decorator,
    Component,
    Node,
    Prefab,
    instantiate,
    systemEvent,
    RigidBodyComponent,
    Vec3,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("shoot")
export class shoot extends Component {
    @property({type: Prefab})
    public bulletPrefab: Prefab = null;

    @property({type: cc.Float})
    moveSpeed = 0;
    @property({type: cc.Float})
    bulletStartSpeed = 1;

    public isClick = false;
    public offset : Vec3 = new Vec3();
    public point : Vec3 = new Vec3();

    start () {
        systemEvent.on(Node.EventType.TOUCH_START, ()=>{
            this.isClick = true;
        });
        systemEvent.on(Node.EventType.TOUCH_END, () => {
            this.shoot();
            this.isClick = false;
        });
        systemEvent.on(Node.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.on(Node.EventType.KEY_UP, this.onKeyUp, this);
    }
    shoot () {
        let node = instantiate(this.bulletPrefab);
        node.parent = this.node.parent;
        node.position = this.node.position;

        let bulletCom: RigidBodyComponent = node.getComponent(RigidBodyComponent);
        bulletCom.applyImpulse(new Vec3(0, 2.29, -1 * this.bulletStartSpeed));
    }
    onKeyDown (event) {
        cc.log(event);
        let rotation = this.node.eulerAngles;
        let position = this.node.getPosition();
        switch(event.keyCode) {
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
    onKeyUp () {
        this.offset.x = 0;
        this.offset.y = 0;
        this.offset.z = 0;
    }
    update (deltaTime: number) {
        //计算要移动的目标位置
        Vec3.add(this.point, this.node.position, this.offset);
        //插值计算
        Vec3.lerp(this.point, this.node.position, this.point, deltaTime * this.moveSpeed);
        //移动节点
        this.node.setPosition(this.point);
        if (this.isClick){
            if (this.bulletStartSpeed < 20) {
                this.bulletStartSpeed += deltaTime*10;
            }
        } else {
            this.bulletStartSpeed = 1;
        }
    }
}
