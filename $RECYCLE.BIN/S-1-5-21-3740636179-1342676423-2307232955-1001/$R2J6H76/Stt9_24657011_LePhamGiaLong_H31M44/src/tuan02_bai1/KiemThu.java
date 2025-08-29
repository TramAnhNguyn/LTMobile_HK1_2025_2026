package tuan02_bai1;

import java.util.Arrays;
import java.util.Random;

public class KiemThu {
	
	
	public static void main(String[] args) {
		int n = 5;
		HinhTron[] dsHinhTron = taoDuLieuMau(n);
		for (HinhTron hinhTron : dsHinhTron) {
			System.out.print(hinhTron);
		}
		Arrays.asList(dsHinhTron).forEach(item ->{
			String s = "C-" + item.getTam();
			System.out.print(s);
		});
	}

	private static HinhTron[] taoDuLieuMau(int n) {
		Random random = new Random();
		double bk;
		double x;
		double y;
		String s = null;
		HinhTron[] danhsachHinhTron = new HinhTron[n];
		for(int i = 0; i < danhsachHinhTron.length;i++) {
			double bk1 = random.nextDouble()*10 + 10;
			double x1 = random.nextDouble()*10;
			double y1 = random.nextDouble()*10;
			s = "A" + i;
			danhsachHinhTron[i] = new HinhTron(new ToaDo(s, x1, y1), bk1);
		}
		return danhsachHinhTron;
	}

}
