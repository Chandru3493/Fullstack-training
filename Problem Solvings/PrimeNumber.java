import java.util.*;

public class PrimeNumber {
  static boolean isPrime(int num) {
    if (num == 2)
      return true;
    if (num % 2 == 0)
      return false;
    for (int i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i == 0)
        return true;
    }
    return false;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print(isPrime(sc.nextInt()) ? "Prime" : "Not Prime");
    sc.close();
  }
}
