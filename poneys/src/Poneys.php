<?php
/**
 * Gestion de poneys
 */
class Poneys
{
    private $count = 8;


    /**
     * Retourne le nombre de poneys
     *
     * @return void
     */
    public function getCount()
    {
        return $this->count;
    }

    public function setCount(int $number)
    {
	$this->count = $number;
    }

    /**
     * Retire un poney du champ
     *
     * @param int $number Nombre de poneys à retirer
     *
     * @return void
     */
    public function removePoneyFromField(int $number) 
    {
	if($number>$this->count)
		throw new InvalidArgumentException('total <0 :'.$number);
	if($number<0)
		throw new InvalidArgumentException('number <0 :'.$number);
        $this->count -= $number;
    }

    public function addPoneyToField(int $number)
    {
	$this->count += $number;
    }


    public function haveSpace(int $taille)
    {
	if($this->count<$taille)
		return True;
	return False;
    }

    /**
     * Retourne les noms des poneys
     *
     * @return array
     */
    public function getNames()
    {

    }
}
?>
