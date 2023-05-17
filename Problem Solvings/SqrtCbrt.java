import java.util.Scanner;

public class SqrtCbrt {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();
    System.out.print("Square root is " + Math.sqrt(num) + "\nCube root is " + Math.cbrt(num));
    sc.close();
  }
}
