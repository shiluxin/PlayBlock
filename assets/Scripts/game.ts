import { _decorator, Component, Node, Prefab, instantiate, Vec3} from "cc";
const { ccclass, property } = _decorator;

@ccclass("game")
export class game extends Component {
    /* class member could be defined like this */
    // dummy = '';
    @property({type: Prefab})
    public blockPrefab: Prefab = null;
    @property({type: Node})
    public UINode: Node = null;

    createNum = 56;

    public blockParent: any;
    public setPos : any;
    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        this.UINode.active = true;
        this.blockParent = this.node.parent.getChildByName('block');
        for (let i = 0; i < this.createNum; i++){
            this.addBlock(i);
        }
    }
    closeUINode () {
        this.UINode.active = false;
    }
    addBlock (index) {
        let num = index % 20;
        let hight = Math.floor(index/20);
        console.log('num = '+num+',hight = '+hight);
        let node = this.blockParent.getChildByName('block_'+num.toString()+'_'+hight.toString());
        if (node === null){
            node = instantiate(this.blockPrefab);
            node.name = 'block_'+num.toString()+'_'+hight.toString();
            node.parent = this.blockParent;
            if (num === 0){
                this.setPos = new Vec3(num, hight, 0);
            }else {
                let lastNode = this.blockParent.getChildByName('block_'+(num -1).toString()+'_'+hight.toString());
                let pos = lastNode.position;
                if (num % 2 === 0){
                    this.setPos = new Vec3(-pos.x, hight, 0);
                } else {
                    this.setPos = new Vec3(pos.x+num, hight, 0);
                }
            }
            console.log('this.setPos = '+JSON.stringify(this.setPos));
            node.setPosition(this.setPos);
        }
    }
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
