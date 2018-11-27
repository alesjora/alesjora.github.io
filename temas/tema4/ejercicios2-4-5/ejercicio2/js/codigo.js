/**
 * Script factura 
 * @author José Rafael Álvarez Espino
 */

{

    function iniciar() {
        let cliente = new Cliente("Cliente 1", "Arcos de la frontera", "111222333", "012345678A");
        let productos = [new Producto("Cartucho de tinta HP", "1", "5"),
            new Producto("Ratón Inalámbrico", "3", "12"),
            new Producto("USB 32GB 3.0", "1", "9")
        ];

        let empresa = new Empresa("Informática Sebas", "C/ Arcos de la frontera", "123456789", "14785236E");
        let factura = new Factura(cliente, empresa, productos);
        factura.calcularTotal();

        document.getElementById("informacion").textContent = "El total de la factura es: " + factura.mostrarTotal() + "€";
    }

    function Cliente(nombre, direccion, telefono, dni) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.dni = dni;
    }

    function Producto(descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    function Informacion(baseImponible, iva, formaDePago, total) {
        this.baseImponible = baseImponible;
        this.iva = iva;
        this.formaDePago = formaDePago;
        this.total = total;
    }

    function Empresa(nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }

    function Factura(cliente, empresa, productos) {
        this.cliente = cliente;
        this.empresa = empresa;
        this.productos = productos;
        this.informacion = new Informacion(0, 1.21, "efectivo", 0);
    }

    Factura.prototype.calcularTotal = function () {

        for (let producto of this.productos) {
            this.informacion.baseImponible += producto.cantidad * producto.precio;
        }
        this.informacion.total = this.informacion.baseImponible * this.informacion.iva;
    }

    Factura.prototype.mostrarTotal = function () {
        return this.informacion.total;
    }

    window.addEventListener("load", iniciar);
}