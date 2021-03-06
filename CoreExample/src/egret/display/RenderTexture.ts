/**
 * 以下示例演示了使用 RenderTexture 类绘制显示对象。
 */
class RenderTextureExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.startLoad();
    }

    private startLoad():void {
        //创建 URLLoader 对象
        var loader:egret.URLLoader = new egret.URLLoader();
        //设置加载方式为纹理
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url:string = "resource/assets/egret_icon.png";
        var request:egret.URLRequest = new egret.URLRequest(url);
        //开始加载
        loader.load(request);
    }

    private onLoadComplete(event:egret.Event):void {
        var loader:egret.URLLoader = <egret.URLLoader>event.target;
        //获取加载到的纹理对象
        var texture:egret.Texture = <egret.Texture>loader.data;
        //使用 RenderTexture 进行显示
        var renderTexture:egret.RenderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(new egret.Bitmap(texture));

        //将绘制好的 RenderTexture 进行显示
        var bitmap:egret.Bitmap = new egret.Bitmap(renderTexture);
        this.addChild(bitmap);
    }
}