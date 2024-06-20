/**
 * Main
 */
public class Main {

    // 声明本地接口方法
    public native int add(int a, int b);

    // 加载本地库
    static {
        System.loadLibrary("libhello");
    }

    // 在静态方法中调用本地方法
    public static void main(String[] args) {
        Main lib = new Main();
        int a = lib.add(1, 2);
        System.out.println("a: " + a);
    }
}
