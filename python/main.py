
#* 1 - 
'''
numero = float(input("Digite um número: "))
if numero > 0:
    print("Positivo")
elif numero < 0:
    print("Negativo")
else:
    print("Zero")
'''
#* 2 -
'''
nome = input("Digite o nome: ")
idade = int(input("Digite a idade: "))
if idade >= 16:
    print(f"{nome} está apto(a) para votar.")
else:
    print(f"{nome} não está apto(a) para votar.")
'''

#* 3 -
'''
quantidade = int(input("Digite a quantidade de produtos: "))
valor_total = 0

for _ in range(quantidade):
    preco = float(input("Digite o preço do produto: "))
    valor_total += preco

print(f"Valor total: {valor_total:.2f}")
'''

#* 4 - 
'''
for i in range(1, 21):
    if i % 2 == 0:
        print(i)
'''

#* 5 - 
'''
numero = int(input("Digite um número para ver a tabuada: "))
for i in range(1, 11):
    print(f"{numero} x {i} = {numero * i}")
'''

#* 6 - 
'''
numero = int(input("Digite um número: "))
if numero % 5 == 0:
    print("É múltiplo de 5")
else:
    print("Não é múltiplo de 5")
'''

#* 7 - 
'''
peso = float(input("Digite seu peso (kg): "))
altura = float(input("Digite sua altura (m): "))
imc = peso / (altura ** 2)
print(f"Seu IMC é: {imc:.2f}")
'''