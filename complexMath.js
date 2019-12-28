class Complex{
	constructor(real, imaginary){
		this.re = real;
		this.im = imaginary;
	} 
	
	add(other){
		return new Complex(this.re + other.re, this.im + other.im);
	}

    sub(other){
		return new Complex(this.re - other.re, this.im - other.im);
	}

	mul(other){
		return new Complex(this.re * other.re - this.im * other.im, this.re * other.im + this.im * other.re);
	}

	div(other){
		return new Complex(
			(this.re * other.re + this.im * other.im) / (other.re * other.re + other.im * other.im),
			(this.im * other.re - this.re * other.im) / (other.re * other.re + other.im * other.im)
		);
	}

	len(){
		return Math.sqrt(lenSqr());
	}

	lenSqr(){
		return this.re*this.re + this.im*this.im;
	}

	conjugate(){
		return new Complex(this.re, -this.im);
	}
}