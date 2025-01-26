<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>폼 확인</title>
	<style>
		* { padding: 0; margin: 0; }
		article table			{ width:300px; margin-top:10px; border:1px solid #ccc; }
		article th				{ height:28px; padding:3px; border:1px solid #ccc; background:#f0f0f0; color:#333; }
		article td				{ height:28px; padding:3px; padding-left:10px; border:1px solid #ccc; text-align:left; font-weight:normal; }
	</style>
</head>

<body>
	<article>
	<?
	if (is_array($_REQUEST)) {?>
		<table>
			<tr>
				<th>name</th>
				<th>value</th>
			</tr>
		<?
		foreach ($_REQUEST AS $key => $value) {?>
			<tr><?
			if (is_array($value)) {?>
				<td><?=$key?></td><td><?
				foreach ($value AS $key2 => $value2) {?>
				<?=$value2?>, <?
				}?>
				</td>
				<?
			}
			else {?>
				<td><?=$key?></td>
				<td><?=$value?></td>
				<?
			}?>
			</tr><?
		}?>
		</table><?
	}
	?>
	<?
	if (is_array($_FILES)) {?>
		<table>
			<tr>
				<th>name</th>
				<th>value</th>
			</tr>
		<?
		foreach ($_FILES AS $key => $value) {?>
			<tr><?
			if (is_array($value)) {?>
				<td><?=$key?></td><td><?
				foreach ($value AS $key2 => $value2) {?>
				<?=$value2?>, <?
				}?>
				</td>
				<?
			}
			else {?>
				<td><?=$key?></td>
				<td><?=$value?></td>
				<?
			}?>
			</tr><?
		}?>
		</table><?
	}
	?>
	</article>
</body>
</html>