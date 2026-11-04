document.addEventListener('DOMContentLoaded', function () {

    /**
     * TODO: Initialiser l'état de la facture dès que la page est chargée
     * - Sélectionner toutes les lignes du tableau
     * - Appeler updateItemTotal sur chaque ligne pour recalculer les totaux existants
     * - Appeler updateInvoiceTotal pour afficher le total global correct
     */
    const invoiceTable = document.querySelector('#invoiceTable tbody');
    const invoiceTotal = document.getElementById('invoiceTotal');
    let nextItemNumber = invoiceTable.rows.length + 1;

    updateInvoiceTotal();



    /**
     * Fonction pour mettre à jour le total d'un article (ligne du tableau)
     * TODO:
     * - Récupérer les inputs .quantity et .unitPrice à l'intérieur de `row`
     * - Convertir leurs valeurs en nombres (parseFloat / Number)
     * - Calculer le total (quantité * prix)
     * - Mettre à jour la cellule .itemTotal avec un format à deux décimales
     * - Retourner le total calculé afin de pouvoir le réutiliser
     */
    function updateItemTotal(row) {
        const quantity = parseFloat(row.querySelector('.quantity').value) || 0;
        const unitPrice = parseFloat(row.querySelector('.unitPrice').value) || 0;
        const total = quantity * unitPrice;
        row.querySelector('.itemTotal').textContent = total.toFixed(2);
        return total;
    }


    /**
     * Fonction pour mettre à jour le total global de la facture
     * TODO:
     * - Parcourir toutes les lignes du corps du tableau
     * - Utiliser updateItemTotal(row) pour récupérer chaque total (ou lire la cellule .itemTotal)
     * - Additionner tous les totaux de lignes
     * - Mettre à jour le texte de `invoiceTotal` avec la somme formatée en deux décimales
     */
    function updateInvoiceTotal() {
        let total = 0;

        for (let i = 0; i < invoiceTable.rows.length; i++) {
            total += updateItemTotal(invoiceTable.rows[i]);
        }

        invoiceTotal.textContent = total.toFixed(2);
    }

    /**
     * Fonction pour ajouter une nouvelle ligne d'article dans la facture
     * TODO:
     * - Créer un nouvel élément <tr>
     * - Ajouter les cellules nécessaires (nom, inputs quantité/prix, total)
     * - Veiller à ce que les inputs aient les mêmes classes que les autres lignes
     * - Ajouter des écouteurs d'événement sur les inputs pour recalculer les totaux en direct
     * - Insérer la nouvelle ligne dans `invoiceTable`
     * - Appeler updateInvoiceTotal pour recalculer le total global après l'ajout
     */
    function addNewItem() {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>Article ${nextItemNumber++}</td>
            <td><input type="number" value="0" class="quantity" min="0"></td>
            <td><input type="number" value="0.00" class="unitPrice" min="0" step="0.01"></td>
            <td class="itemTotal">0.00</td>
        `;

        const inputs = newRow.querySelectorAll('.quantity, .unitPrice');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', updateInvoiceTotal);
        }

        addDeleteButton(newRow);

        invoiceTable.appendChild(newRow);
        updateInvoiceTotal();

        /**
         * Bonus facultatif si les TODO précédents sont terminés:
         * - Ajouter un bouton "Supprimer" sur chaque ligne
         * - Lorsque l'utilisateur clique dessus, retirer la ligne et recalculer le total via updateInvoiceTotal
         */
    }

    function addDeleteButton(row) {
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');

        deleteButton.type = 'button';
        deleteButton.textContent = 'Supprimer';
        deleteButton.addEventListener('click', function () {
            row.remove();
            updateInvoiceTotal();
        });

        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
    }

    for (let i = 0; i < invoiceTable.rows.length; i++) {
        addDeleteButton(invoiceTable.rows[i]);
    }

    window.addNewItem = addNewItem;
});
    
