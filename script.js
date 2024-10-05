function gerarNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById("valorVenda").value);
    const itens = document.getElementById("itens").value;
    const irpf = parseFloat(document.getElementById("irpf").value);
    const pis = parseFloat(document.getElementById("pis").value);
    const cofins = parseFloat(document.getElementById("cofins").value);
    const inss = parseFloat(document.getElementById("inss").value);
    const issqn = parseFloat(document.getElementById("issqn").value);

    if (valorVenda < 0 || irpf < 0 || pis < 0 || cofins < 0 || inss < 0 || issqn < 0) {
        alert("Os valores não podem ser negativos. Por favor, insira valores válidos.");
        return;
    }
    const irpfValor = (irpf / 100) * valorVenda;
    const pisValor = (pis / 100) * valorVenda;
    const cofinsValor = (cofins / 100) * valorVenda;
    const inssValor = (inss / 100) * valorVenda;
    const issqnValor = (issqn / 100) * valorVenda;

    const totalImpostos = irpfValor + pisValor + cofinsValor + inssValor + issqnValor;
    const valorTotal = valorVenda - totalImpostos;

    const notaFiscalHTML = `
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <p><strong>Impostos:</strong></p>
        <ul>
            <li>IRPF: R$ ${irpfValor.toFixed(2)}</li>
            <li>PIS: R$ ${pisValor.toFixed(2)}</li>
            <li>COFINS: R$ ${cofinsValor.toFixed(2)}</li>
            <li>INSS: R$ ${inssValor.toFixed(2)}</li>
            <li>ISSQN: R$ ${issqnValor.toFixed(2)}</li>
        </ul>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Total após Impostos:</strong> R$ ${valorTotal.toFixed(2)}</p>
    `;

    document.getElementById("notaFiscal").innerHTML = notaFiscalHTML;
}
